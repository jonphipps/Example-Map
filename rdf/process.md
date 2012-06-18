So this will all have to be done server-side and uploaded to GitHub. The problem is that the various RDFa parsers need a fully-formed page and we can't rely on client-side javascript templates to build the dom. The RDFa has to be static and the rest of it can be dynamic.

What's done:
* schema.org page semi-converted to twitter bootstrap
* got and converted the necessary RDF to javascript (not necessary now)
* tracked down client/server-side RDF processing (not needed unless node)
* basic template for a single map designed (see below)
* looked at a bunch of javascript templates, mostly client-side. Very much like the look of:
   * http://handlebarsjs.com/
   * http://knockoutjs.com/
   * http://icanhazjs.com/
   * [punch](http://laktek.github.com/punch/user_guide.html)
   * [transparency](http://leonidas.github.com/transparency/)
* not so much:
   * [pure](http://www.lieuwejan.com/article/show/2/pure-generate-html-from-json-data)
   * [plates](https://github.com/flatiron/plates)
   * [weld](https://github.com/hij1nx/weld)
   
But we'll probably use:
https://github.com/bobthecow/mustache.php
https://github.com/michaelenger/mustacheview

But in many ways I like the idea behind punch the best.

Next steps (also see below):
* mustache templating server-side
* read templates from GitHub
* build page using template (consider using [punch](http://css.dzone.com/articles/generate-websites-json) but only if we decide to use node for this)
* laravel has blade, twig, mustache templating bundles. Consider using blade for the site and mustache for the API
* follow the template below for each mapping. This has been tested against the RDFa distiller

We're using:
* [graphite](http://graphite.ecs.soton.ac.uk/rdf2json/index.php/converted.js?uri=https%3A%2F%2Fraw.github.com%2Fdcmi%2Fschema.org%2Fmaster%2Fmappings_schema.org.xml&callback=&mode=triples)
And using the same service to convert RDF to JSON. This is unnecessary if we're doing it server side because we can use the raw RDF, but we should maybe think in terms of the same object structure.
* [RDFa validator](http://validator.w3.org/nu/?doc=data:text/html)  
* [RDFa distiller](http://www.w3.org/2012/pyRdfa/Overview#distill_by_input)

Still need to (in order of priority):
* design the TOC
* build the TOC template
* build the mustache templates for each row
* render the html on the server (this will be hard) from the RDF for the map, dc, dcterms, schema.org, and the mustache templates. 
* Push rendered html to GitHub (this will require registration of the repo with vocabhub). Maintenance should consist of editing the mustache templates and the RDF.
* setup services to [search the GitHub issues](https://api.github.com/legacy/issues/search/dcmi/schema.org/open/schema:Organization_rdfs:subClassOf_dct:Agent) returning both issues and comments. There's a test GitHub issue that the above search will find.
* search a registered mailing list rss for related issues
* make the above services available by ajax (server-side and browser-side caching since they won't get updated very often). Services should run on a cron or enable GitHub API services if available.


We also need a prefix map to make sure we're all on the same page.
```
{
    "http://purl.org/dc/elements/1.1/" : "dc",
    "http://purl.org/dc/terms/" : "dcterms",
    "http://purl.org/dc/dcmitype/" : "dctype",
    "http://www.w3.org/2002/07/owl#" : "owl",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#" : "rdf",
    "http://www.w3.org/2000/01/rdf-schema#" : "rdfs",
    "http://schema.org/" : "schema"
}
```
Convert the RDF map to JSON. In this case we're using the 'triples' conversion, which reifies the data:

```
[
  {
    "subject" : "http://dublincore.org/mappings/schema.org/",
    "predicate" : "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
    "object" : "http://www.w3.org/2002/07/owl#Ontology",
    "type" : "uri"
  },
  {
    "subject" : "schema:Organization",
    "predicate" : "http://www.w3.org/2000/01/rdf-schema#subClassOf",
    "object" : "dct:Agent",
    "type" : "uri"
  }
...
  {
    "subject": "schema:mentions",
    "predicate": "http://www.w3.org/2000/01/rdf-schema#subPropertyOf",
    "object": "dct:related",
    "type": "uri"
  }
]
```
```
Iterate over the map
For each object in the map array
  Do the classes first
  Substitute the correct prefix for subject, predicate, object (wish we only had to do that once)
  Store the concatenated id (?)
  Populate the template    
```

```html
<div class="row-fluid table-bordered">
    <div class="span12">
        <div class="row-fluid headlink"
             id="schema:Organization_rdfs:subClassOf_dct:Agent"
             typeof="rdf:Property"
             about="http://schema.org/Organization">

            <div class="span4"><a href="http://www.schema.org/docs/schema_org_rdfa.html"
                                  class="external free"
                                  rel="nofollow">schema:Organization</a></div>
            <div class="span2 relation">rdfs:subClassOf</div>
            <div class="span6"><a property="rdfs:subClassOf"
                                  href="http://purl.org/dc/terms/Agent"
                                  class="external free"
                                  rel="nofollow">dct:Agent</a></div>
        </div>
        <div class="row-fluid">
            <div class="span6">
<pre>rdf:type rdfs:Class .
rdfs:label "Organization"@en .
rdfs:comment "An organization such as a school, NGO, corporation, club, etc."@en .
rdfs:subClassOf schema:Thing .
</pre>
            </div>
            <div class="span6">
<pre>rdfs:label "Agent"@en-us .
rdfs:comment "A resource that acts or has the power to act."@en-us .
dct:description "Examples of Agent include person, organization, and software agent."@en-us .
rdf:type rdfs:Class .
rdf:type dct:AgentClass .
</pre>
            </div>
        </div>
        <div class="row-fluid table-bordered">
            <div class="span2">reference this id:</div>
            <div class="span10">schema:Organization_rdfs:subClassOf_dct:Agent</div>
        </div>
        <div class="row-fluid table-bordered">
            <div class="span2">Status:</div>
            <div class="span10">[proposed | in discussion | approved]</div>
        </div>
        <div class="row-fluid table-bordered">
            <div class="span2">Issues on Github:</div>
            <div class="span10">
            <p><a href="https://github.com/dcmi/schema.org/issues/search?q=schema:Organization_rdfs:subClassOf_dct:Agent">Search for issues</a> related to this map</p>
            <p><a href="https://api.github.com/legacy/issues/search/dcmi/schema.org/open/schema:Organization_rdfs:subClassOf_dct:Agent">Searchfor issues</a> related to this id using the Github API</p>
       </div>

        </div>
        <div class="row-fluid table-bordered">
            <div class="span2">Discussion on mailing list:</div>
            <div class="span10">Service TBA</div>
        </div>
        <div class="row-fluid table-bordered">
            <div class="span2">Definitions:</div>
            <div class="span10"></div>
        </div>
    </div>
</div>
```