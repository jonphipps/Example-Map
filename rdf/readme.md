##Notes on these formats:

* the [bookmarklet](http://niklasl.github.com/rdfa-lab/) from [RDFA-Lab](https://github.com/niklasl/rdfa-lab) was used to create the [JSON-LD](http://json-ld.org/) formats:
```
	dcall_ld.js
	schema_ld.js
```
* dcall\_ld is derived from running the bookmarklet on http://dublincore.org/documents/2012/06/14/dcmi-terms/
* schema\_ld is derived from running the bookmarklet on http://www.schema.org/docs/schema_org_rdfa.html on June 15, 2012

The other flavors of JSON were created by running [Chris Gutteridge](http://www.ecs.soton.ac.uk/people/cjg)'s [Convert RDF to JSON service](http://graphite.ecs.soton.ac.uk/rdf2json/index.php/) on:

* http://purl.org/dc/terms
* http://purl.org/dc/elements/1.1
* http://www.schema.org/docs/schema_org_rdfa.html
	
The source for the schema.org JSON was created by running the schema.org RDFa through the RDFa distiller:

http://www.w3.org/2012/pyRdfa/extract?uri=http://www.schema.org/docs/schema_org_rdfa.html

…and then converting to JSON using the RDF2JSON service mentioned above:

http://graphite.ecs.soton.ac.uk/rdf2json/index.php/converted.js?uri=http%3A%2F%2Fwww.w3.org%2F2012%2FpyRdfa%2Fextract%3Furi%3Dhttp%3A%2F%2Fwww.schema.org%2Fdocs%2Fschema_org_rdfa.html&mode=full
	
It was not possible to pull useful JSON from http://schema.org/docs/schemaorg.owl, which doesn't resolve (and should), or http://www.schema.org/docs/schemaorg.owl since my JSON parser of choice was not very pleased to be presented with OWL. It also doesn't understand RDFa lite at the moment. 

Life would have been simpler if we could have used the more friendly http://schema.rdfs.org/ for schema.org data.

I'm sure there are just dozens of other experimental, unmaintained, or non-existent services I could have 'used' but these two seemed to work pretty well.