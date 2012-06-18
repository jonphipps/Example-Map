{
	"http://dublincore.org/mappings/schema.org/": {
		"http://www.w3.org/1999/02/22-rdf-syntax-ns#type": [
			{ "value": "http://www.w3.org/2002/07/owl#Ontology", "type": "uri" }
		]
	},
	"schema:Organization": {
		"http://www.w3.org/2000/01/rdf-schema#subClassOf": [
			{ "value": "dct:Agent", "type": "uri" }
		]
	},
	"schema:Person": {
		"http://www.w3.org/2000/01/rdf-schema#subClassOf": [
			{ "value": "dct:Agent", "type": "uri" }
		]
	},
	"schema:Place": {
		"http://www.w3.org/2002/07/owl#equivalentClass": [
			{ "value": "dct:Location", "type": "uri" }
		]
	},
	"schema:Event": {
		"http://www.w3.org/2002/07/owl#equivalentClass": [
			{ "value": "dctype:Event", "type": "uri" }
		]
	},
	"schema:Language": {
		"http://www.w3.org/2000/01/rdf-schema#subClassOf": [
			{ "value": "dct:LinguisticSystem", "type": "uri" }
		]
	},
	"dct:BibliographicResource": {
		"http://www.w3.org/2000/01/rdf-schema#subClassOf": [
			{ "value": "schema:CreativeWork", "type": "uri" }
		]
	},
	"dct:title": {
		"http://www.w3.org/2000/01/rdf-schema#subPropertyOf": [
			{ "value": "schema:name", "type": "uri" }
		]
	},
	"schema:description": {
		"http://www.w3.org/2002/07/owl#equivalentProperty": [
			{ "value": "dct:description", "type": "uri" }
		]
	},
	"schema:caption": {
		"http://www.w3.org/2000/01/rdf-schema#subPropertyOf": [
			{ "value": "dct:description", "type": "uri" }
		]
	},
	"schema:author": {
		"http://www.w3.org/2000/01/rdf-schema#subPropertyOf": [
			{ "value": "dct:creator", "type": "uri" }
		]
	},
	"schema:about": {
		"http://www.w3.org/2002/07/owl#equivalentProperty": [
			{ "value": "dct:subject", "type": "uri" }
		]
	},
	"schema:publisher": {
		"http://www.w3.org/2002/07/owl#equivalentProperty": [
			{ "value": "dct:publisher", "type": "uri" }
		]
	},
	"schema:datePublished": {
		"http://www.w3.org/2002/07/owl#equivalentProperty": [
			{ "value": "dct:issued", "type": "uri" }
		]
	},
	"schema:inLanguage": {
		"http://www.w3.org/2002/07/owl#equivalentProperty": [
			{ "value": "dc:language", "type": "uri" }
		]
	},
	"schema:encodings": {
		"http://www.w3.org/2000/01/rdf-schema#subPropertyOf": [
			{ "value": "dct:format", "type": "uri" }
		]
	},
	"schema:duration": {
		"http://www.w3.org/2000/01/rdf-schema#subPropertyOf": [
			{ "value": "dct:extent", "type": "uri" }
		]
	},
	"schema:keywords": {
		"http://www.w3.org/2000/01/rdf-schema#subPropertyOf": [
			{ "value": "dc:subject", "type": "uri" }
		]
	},
	"schema:url": {
		"http://www.w3.org/2000/01/rdf-schema#subPropertyOf": [
			{ "value": "dct:identifier", "type": "uri" }
		]
	},
	"schema:contentLocation": {
		"http://www.w3.org/2000/01/rdf-schema#subPropertyOf": [
			{ "value": "dct:coverage", "type": "uri" }
		]
	},
	"schema:subEvents": {
		"http://www.w3.org/2000/01/rdf-schema#subPropertyOf": [
			{ "value": "dct:hasPart", "type": "uri" }
		]
	},
	"schema:superEvent": {
		"http://www.w3.org/2000/01/rdf-schema#subPropertyOf": [
			{ "value": "dct:isPartOf", "type": "uri" }
		]
	},
	"schema:contributor": {
		"http://www.w3.org/2000/01/rdf-schema#subPropertyOf": [
			{ "value": "dct:contributor", "type": "uri" }
		]
	},
	"schema:illustrator": {
		"http://www.w3.org/2000/01/rdf-schema#subPropertyOf": [
			{ "value": "dct:contributor", "type": "uri" }
		]
	},
	"schema:actors": {
		"http://www.w3.org/2000/01/rdf-schema#subPropertyOf": [
			{ "value": "dct:contributor", "type": "uri" }
		]
	},
	"schema:director": {
		"http://www.w3.org/2000/01/rdf-schema#subPropertyOf": [
			{ "value": "dct:contributor", "type": "uri" }
		]
	},
	"schema:musicBy": {
		"http://www.w3.org/2000/01/rdf-schema#subPropertyOf": [
			{ "value": "dct:contributor", "type": "uri" }
		]
	},
	"schema:producer": {
		"http://www.w3.org/2000/01/rdf-schema#subPropertyOf": [
			{ "value": "dct:creator", "type": "uri" }
		]
	},
	"schema:productionCompany": {
		"http://www.w3.org/2000/01/rdf-schema#subPropertyOf": [
			{ "value": "dct:creator", "type": "uri" }
		]
	},
	"schema:productId": {
		"http://www.w3.org/2000/01/rdf-schema#subPropertyOf": [
			{ "value": "dct:identifier", "type": "uri" }
		]
	},
	"schema:commentTime": {
		"http://www.w3.org/2000/01/rdf-schema#subPropertyOf": [
			{ "value": "dct:date", "type": "uri" }
		]
	},
	"schema:birthDate": {
		"http://www.w3.org/2000/01/rdf-schema#subPropertyOf": [
			{ "value": "dct:date", "type": "uri" }
		]
	},
	"schema:dateModified": {
		"http://www.w3.org/2000/01/rdf-schema#subPropertyOf": [
			{ "value": "dct:modified", "type": "uri" }
		]
	},
	"schema:mentions": {
		"http://www.w3.org/2000/01/rdf-schema#subPropertyOf": [
			{ "value": "dct:related", "type": "uri" }
		]
	}
}
