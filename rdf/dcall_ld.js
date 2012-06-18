{
  "@context": {
    "dcam": "http://purl.org/dc/dcam/",
    "dctype": "http://purl.org/dc/dcmitype/",
    "@language": "en",
    "xsd": "http://www.w3.org/2001/XMLSchema#"
  },
  "@graph": [
    {"@id": "http://dublincore.org/documents/dcmi-terms/"},
    {
      "@id": "http://purl.org/dc/",
      "dcterms:tableOfContents": [{"@id": "http://dublincore.org/documents/dcmi-terms/#contents"}],
      "dcterms:title": ["DCMI Metadata Terms"],
      "dcterms:creator": ["DCMI Usage Board"],
      "dcterms:identifier": [{"@id": "http://dublincore.org/documents/2012/06/14/dcmi-terms/"}],
      "dcterms:issued": [
        {
          "@value": "2012-06-14",
          "@type": "xsd:date"
        }
      ],
      "dcterms:isVersionOf": [{"@id": "http://dublincore.org/documents/dcmi-terms/"}],
      "dcterms:replaces": [{"@id": "http://dublincore.org/documents/2010/10/11/dcmi-terms/"}],
      "dcterms:description": ["This document is an up-to-date specification of all metadata terms maintained by the Dublin Core Metadata Initiative, including properties, vocabulary encoding schemes, syntax encoding schemes, and classes."]
    },
    {"@id": "http://dublincore.org/"},
    {"@id": "http://dublincore.org/documents/dcmi-terms/#H2"},
    {"@id": "http://dublincore.org/documents/dcmi-terms/#H3"},
    {
      "@id": "http://purl.org/dc/terms/abstract",
      "rdfs:isDefinedBy": [{"@id": "http://purl.org/dc/terms/"}],
      "dcterms:issued": [
        {
          "@value": "2000-07-11",
          "@type": "xsd:date"
        }
      ],
      "dcterms:modified": [
        {
          "@value": "2008-01-14",
          "@type": "xsd:date"
        }
      ],
      "rdfs:label": ["Abstract"],
      "rdfs:comment": ["A summary of the resource."],
      "rdf:type": [{"@id": "http://www.w3.org/1999/02/22-rdf-syntax-ns#Property"}],
      "rdfs:subPropertyOf": [
        {"@id": "http://purl.org/dc/elements/1.1/description"},
        {"@id": "http://purl.org/dc/terms/description"}
      ],
      "dcterms:hasVersion": [{"@id": "http://dublincore.org/usage/terms/history/#abstract-003"}]
    },
    {
      "@id": "http://purl.org/dc/terms/accessRights",
      "rdfs:isDefinedBy": [{"@id": "http://purl.org/dc/terms/"}],
      "dcterms:issued": [
        {
          "@value": "2003-02-15",
          "@type": "xsd:date"
        }
      ],
      "dcterms:modified": [
        {
          "@value": "2008-01-14",
          "@type": "xsd:date"
        }
      ],
      "rdfs:label": ["Access Rights"],
      "rdfs:comment": ["Information about who can access the resource or an indication of its security status."],
      "dcterms:description": ["Access Rights may include information regarding access or restrictions based on privacy, security, or other policies."],
      "rdf:type": [{"@id": "http://www.w3.org/1999/02/22-rdf-syntax-ns#Property"}],
      "rdfs:subPropertyOf": [
        {"@id": "http://purl.org/dc/elements/1.1/rights"},
        {"@id": "http://purl.org/dc/terms/rights"}
      ],
      "rdfs:range": [{"@id": "http://purl.org/dc/terms/RightsStatement"}],
      "dcterms:hasVersion": [{"@id": "http://dublincore.org/usage/terms/history/#accessRights-002"}]
    },
    {
      "@id": "http://purl.org/dc/terms/accrualMethod",
      "rdfs:isDefinedBy": [{"@id": "http://purl.org/dc/terms/"}],
      "dcterms:issued": [
        {
          "@value": "2005-06-13",
          "@type": "xsd:date"
        }
      ],
      "dcterms:modified": [
        {
          "@value": "2010-10-11",
          "@type": "xsd:date"
        }
      ],
      "rdfs:label": ["Accrual Method"],
      "rdfs:comment": ["The method by which items are added to a collection."],
      "rdf:type": [{"@id": "http://www.w3.org/1999/02/22-rdf-syntax-ns#Property"}],
      "rdfs:domain": [{"@id": "http://purl.org/dc/dcmitype/Collection"}],
      "rdfs:range": [{"@id": "http://purl.org/dc/terms/MethodOfAccrual"}],
      "dcterms:hasVersion": [{"@id": "http://dublincore.org/usage/terms/history/#accrualMethod-003"}]
    },
    {
      "@id": "http://purl.org/dc/terms/accrualPeriodicity",
      "rdfs:isDefinedBy": [{"@id": "http://purl.org/dc/terms/"}],
      "dcterms:issued": [
        {
          "@value": "2005-06-13",
          "@type": "xsd:date"
        }
      ],
      "dcterms:modified": [
        {
          "@value": "2010-10-11",
          "@type": "xsd:date"
        }
      ],
      "rdfs:label": ["Accrual Periodicity"],
      "rdfs:comment": ["The frequency with which items are added to a collection."],
      "rdf:type": [{"@id": "http://www.w3.org/1999/02/22-rdf-syntax-ns#Property"}],
      "rdfs:domain": [{"@id": "http://purl.org/dc/dcmitype/Collection"}],
      "rdfs:range": [{"@id": "http://purl.org/dc/terms/Frequency"}],
      "dcterms:hasVersion": [{"@id": "http://dublincore.org/usage/terms/history/#accrualPeriodicity-003"}]
    },
    {
      "@id": "http://purl.org/dc/terms/accrualPolicy",
      "rdfs:isDefinedBy": [{"@id": "http://purl.org/dc/terms/"}],
      "dcterms:issued": [
        {
          "@value": "2005-06-13",
          "@type": "xsd:date"
        }
      ],
      "dcterms:modified": [
        {
          "@value": "2010-10-11",
          "@type": "xsd:date"
        }
      ],
      "rdfs:label": ["Accrual Policy"],
      "rdfs:comment": ["The policy governing the addition of items to a collection."],
      "rdf:type": [{"@id": "http://www.w3.org/1999/02/22-rdf-syntax-ns#Property"}],
      "rdfs:domain": [{"@id": "http://purl.org/dc/dcmitype/Collection"}],
      "rdfs:range": [{"@id": "http://purl.org/dc/terms/Policy"}],
      "dcterms:hasVersion": [{"@id": "http://dublincore.org/usage/terms/history/#accrualPolicy-003"}]
    },
    {
      "@id": "http://purl.org/dc/terms/alternative",
      "rdfs:isDefinedBy": [{"@id": "http://purl.org/dc/terms/"}],
      "dcterms:issued": [
        {
          "@value": "2000-07-11",
          "@type": "xsd:date"
        }
      ],
      "dcterms:modified": [
        {
          "@value": "2010-10-11",
          "@type": "xsd:date"
        }
      ],
      "rdfs:label": ["Alternative Title"],
      "rdfs:comment": ["An alternative name for the resource."],
      "dcterms:description": ["The distinction between titles and alternative titles is application-specific."],
      "rdf:type": [{"@id": "http://www.w3.org/1999/02/22-rdf-syntax-ns#Property"}],
      "rdfs:subPropertyOf": [
        {"@id": "http://purl.org/dc/elements/1.1/title"},
        {"@id": "http://purl.org/dc/terms/title"}
      ],
      "dcterms:hasVersion": [{"@id": "http://dublincore.org/usage/terms/history/#alternative-003"}],
      "rdfs:range": [{"@id": "http://www.w3.org/2000/01/rdf-schema#Literal"}]
    },
    {
      "@id": "http://purl.org/dc/terms/audience",
      "rdfs:isDefinedBy": [{"@id": "http://purl.org/dc/terms/"}],
      "dcterms:issued": [
        {
          "@value": "2001-05-21",
          "@type": "xsd:date"
        }
      ],
      "dcterms:modified": [
        {
          "@value": "2008-01-14",
          "@type": "xsd:date"
        }
      ],
      "rdfs:label": ["Audience"],
      "rdfs:comment": ["A class of entity for whom the resource is intended or useful."],
      "rdf:type": [{"@id": "http://www.w3.org/1999/02/22-rdf-syntax-ns#Property"}],
      "rdfs:range": [{"@id": "http://purl.org/dc/terms/AgentClass"}],
      "dcterms:hasVersion": [{"@id": "http://dublincore.org/usage/terms/history/#audience-003"}]
    },
    {
      "@id": "http://purl.org/dc/terms/available",
      "rdfs:isDefinedBy": [{"@id": "http://purl.org/dc/terms/"}],
      "dcterms:issued": [
        {
          "@value": "2000-07-11",
          "@type": "xsd:date"
        }
      ],
      "dcterms:modified": [
        {
          "@value": "2008-01-14",
          "@type": "xsd:date"
        }
      ],
      "rdfs:label": ["Date Available"],
      "rdfs:comment": ["Date (often a range) that the resource became or will become available."],
      "rdf:type": [{"@id": "http://www.w3.org/1999/02/22-rdf-syntax-ns#Property"}],
      "rdfs:subPropertyOf": [
        {"@id": "http://purl.org/dc/elements/1.1/date"},
        {"@id": "http://purl.org/dc/terms/date"}
      ],
      "rdfs:range": [{"@id": "http://www.w3.org/2000/01/rdf-schema#Literal"}],
      "dcterms:hasVersion": [{"@id": "http://dublincore.org/usage/terms/history/#available-003"}]
    },
    {
      "@id": "http://purl.org/dc/terms/bibliographicCitation",
      "rdfs:isDefinedBy": [{"@id": "http://purl.org/dc/terms/"}],
      "dcterms:issued": [
        {
          "@value": "2003-02-15",
          "@type": "xsd:date"
        }
      ],
      "dcterms:modified": [
        {
          "@value": "2008-01-14",
          "@type": "xsd:date"
        }
      ],
      "rdfs:label": ["Bibliographic Citation"],
      "rdfs:comment": ["A bibliographic reference for the resource."],
      "dcterms:description": ["Recommended practice is to include sufficient bibliographic detail to identify the resource as unambiguously as possible."],
      "rdf:type": [{"@id": "http://www.w3.org/1999/02/22-rdf-syntax-ns#Property"}],
      "rdfs:subPropertyOf": [
        {"@id": "http://purl.org/dc/elements/1.1/identifier"},
        {"@id": "http://purl.org/dc/terms/identifier"}
      ],
      "rdfs:domain": [{"@id": "http://purl.org/dc/terms/BibliographicResource"}],
      "rdfs:range": [{"@id": "http://www.w3.org/2000/01/rdf-schema#Literal"}],
      "dcterms:hasVersion": [{"@id": "http://dublincore.org/usage/terms/history/#bibliographicCitation-002"}]
    },
    {
      "@id": "http://purl.org/dc/terms/conformsTo",
      "rdfs:isDefinedBy": [{"@id": "http://purl.org/dc/terms/"}],
      "dcterms:issued": [
        {
          "@value": "2001-05-21",
          "@type": "xsd:date"
        }
      ],
      "dcterms:modified": [
        {
          "@value": "2008-01-14",
          "@type": "xsd:date"
        }
      ],
      "rdfs:label": ["Conforms To"],
      "rdfs:comment": ["An established standard to which the described resource conforms."],
      "rdf:type": [{"@id": "http://www.w3.org/1999/02/22-rdf-syntax-ns#Property"}],
      "rdfs:subPropertyOf": [
        {"@id": "http://purl.org/dc/elements/1.1/relation"},
        {"@id": "http://purl.org/dc/terms/relation"}
      ],
      "rdfs:range": [{"@id": "http://purl.org/dc/terms/Standard"}],
      "dcterms:hasVersion": [{"@id": "http://dublincore.org/usage/terms/history/#conformsTo-003"}]
    },
    {
      "@id": "http://purl.org/dc/terms/contributor",
      "rdfs:isDefinedBy": [{"@id": "http://purl.org/dc/terms/"}],
      "dcterms:issued": [
        {
          "@value": "2008-01-14",
          "@type": "xsd:date"
        }
      ],
      "dcterms:modified": [
        {
          "@value": "2010-10-11",
          "@type": "xsd:date"
        }
      ],
      "rdfs:label": ["Contributor"],
      "rdfs:comment": ["An entity responsible for making contributions to the resource."],
      "dcterms:description": ["Examples of a Contributor include a person, an organization, or a service."],
      "rdf:type": [{"@id": "http://www.w3.org/1999/02/22-rdf-syntax-ns#Property"}],
      "rdfs:subPropertyOf": [{"@id": "http://purl.org/dc/elements/1.1/contributor"}],
      "rdfs:range": [{"@id": "http://purl.org/dc/terms/Agent"}],
      "dcterms:hasVersion": [{"@id": "http://dublincore.org/usage/terms/history/#contributorT-001"}]
    },
    {
      "@id": "http://purl.org/dc/terms/coverage",
      "rdfs:isDefinedBy": [{"@id": "http://purl.org/dc/terms/"}],
      "dcterms:issued": [
        {
          "@value": "2008-01-14",
          "@type": "xsd:date"
        }
      ],
      "dcterms:modified": [
        {
          "@value": "2008-01-14",
          "@type": "xsd:date"
        }
      ],
      "rdfs:label": ["Coverage"],
      "rdfs:comment": ["The spatial or temporal topic of the resource, the spatial applicability of the resource, or the jurisdiction under which the resource is relevant."],
      "dcterms:description": ["Spatial topic and spatial applicability may be a named place or a location specified by its geographic coordinates. Temporal topic may be a named period, date, or date range. A jurisdiction may be a named administrative entity or a geographic place to which the resource applies. Recommended best practice is to use a controlled vocabulary such as the Thesaurus of Geographic Names [TGN]. Where appropriate, named places or time periods can be used in preference to numeric identifiers such as sets of coordinates or date ranges."],
      "rdf:type": [{"@id": "http://www.w3.org/1999/02/22-rdf-syntax-ns#Property"}],
      "rdfs:subPropertyOf": [{"@id": "http://purl.org/dc/elements/1.1/coverage"}],
      "rdfs:range": [{"@id": "http://purl.org/dc/terms/LocationPeriodOrJurisdiction"}],
      "dcterms:hasVersion": [{"@id": "http://dublincore.org/usage/terms/history/#coverageT-001"}]
    },
    {
      "@id": "http://purl.org/dc/terms/created",
      "rdfs:isDefinedBy": [{"@id": "http://purl.org/dc/terms/"}],
      "dcterms:issued": [
        {
          "@value": "2000-07-11",
          "@type": "xsd:date"
        }
      ],
      "dcterms:modified": [
        {
          "@value": "2008-01-14",
          "@type": "xsd:date"
        }
      ],
      "rdfs:label": ["Date Created"],
      "rdfs:comment": ["Date of creation of the resource."],
      "rdf:type": [{"@id": "http://www.w3.org/1999/02/22-rdf-syntax-ns#Property"}],
      "rdfs:subPropertyOf": [
        {"@id": "http://purl.org/dc/elements/1.1/date"},
        {"@id": "http://purl.org/dc/terms/date"}
      ],
      "rdfs:range": [{"@id": "http://www.w3.org/2000/01/rdf-schema#Literal"}],
      "dcterms:hasVersion": [{"@id": "http://dublincore.org/usage/terms/history/#created-003"}]
    },
    {
      "@id": "http://purl.org/dc/terms/creator",
      "rdfs:isDefinedBy": [{"@id": "http://purl.org/dc/terms/"}],
      "dcterms:issued": [
        {
          "@value": "2008-01-14",
          "@type": "xsd:date"
        }
      ],
      "dcterms:modified": [
        {
          "@value": "2010-10-11",
          "@type": "xsd:date"
        }
      ],
      "rdfs:label": ["Creator"],
      "rdfs:comment": ["An entity primarily responsible for making the resource."],
      "dcterms:description": ["Examples of a Creator include a person, an organization, or a service."],
      "rdf:type": [{"@id": "http://www.w3.org/1999/02/22-rdf-syntax-ns#Property"}],
      "rdfs:subPropertyOf": [
        {"@id": "http://purl.org/dc/elements/1.1/creator"},
        {"@id": "http://purl.org/dc/terms/contributor"}
      ],
      "rdfs:range": [{"@id": "http://purl.org/dc/terms/Agent"}],
      "dcterms:hasVersion": [{"@id": "http://dublincore.org/usage/terms/history/#creatorT-002"}],
      "owl:equivalentProperty": [{"@id": "http://xmlns.com/foaf/0.1/maker"}]
    },
    {
      "@id": "http://purl.org/dc/terms/date",
      "rdfs:isDefinedBy": [{"@id": "http://purl.org/dc/terms/"}],
      "dcterms:issued": [
        {
          "@value": "2008-01-14",
          "@type": "xsd:date"
        }
      ],
      "dcterms:modified": [
        {
          "@value": "2008-01-14",
          "@type": "xsd:date"
        }
      ],
      "rdfs:label": ["Date"],
      "rdfs:comment": ["A point or period of time associated with an event in the lifecycle of the resource."],
      "dcterms:description": ["Date may be used to express temporal information at any level of granularity.  Recommended best practice is to use an encoding scheme, such as the W3CDTF profile of ISO 8601 [W3CDTF]."],
      "rdf:type": [{"@id": "http://www.w3.org/1999/02/22-rdf-syntax-ns#Property"}],
      "rdfs:subPropertyOf": [{"@id": "http://purl.org/dc/elements/1.1/date"}],
      "rdfs:range": [{"@id": "http://www.w3.org/2000/01/rdf-schema#Literal"}],
      "dcterms:hasVersion": [{"@id": "http://dublincore.org/usage/terms/history/#dateT-001"}]
    },
    {
      "@id": "http://purl.org/dc/terms/dateAccepted",
      "rdfs:isDefinedBy": [{"@id": "http://purl.org/dc/terms/"}],
      "dcterms:issued": [
        {
          "@value": "2002-07-13",
          "@type": "xsd:date"
        }
      ],
      "dcterms:modified": [
        {
          "@value": "2008-01-14",
          "@type": "xsd:date"
        }
      ],
      "rdfs:label": ["Date Accepted"],
      "rdfs:comment": ["Date of acceptance of the resource."],
      "dcterms:description": ["Examples of resources to which a Date Accepted may be relevant are a thesis (accepted by a university department) or an article (accepted by a journal)."],
      "rdf:type": [{"@id": "http://www.w3.org/1999/02/22-rdf-syntax-ns#Property"}],
      "rdfs:subPropertyOf": [
        {"@id": "http://purl.org/dc/elements/1.1/date"},
        {"@id": "http://purl.org/dc/terms/date"}
      ],
      "rdfs:range": [{"@id": "http://www.w3.org/2000/01/rdf-schema#Literal"}],
      "dcterms:hasVersion": [{"@id": "http://dublincore.org/usage/terms/history/#dateAccepted-002"}]
    },
    {
      "@id": "http://purl.org/dc/terms/dateCopyrighted",
      "rdfs:isDefinedBy": [{"@id": "http://purl.org/dc/terms/"}],
      "dcterms:issued": [
        {
          "@value": "2002-07-13",
          "@type": "xsd:date"
        }
      ],
      "dcterms:modified": [
        {
          "@value": "2008-01-14",
          "@type": "xsd:date"
        }
      ],
      "rdfs:label": ["Date Copyrighted"],
      "rdfs:comment": ["Date of copyright."],
      "rdf:type": [{"@id": "http://www.w3.org/1999/02/22-rdf-syntax-ns#Property"}],
      "rdfs:subPropertyOf": [
        {"@id": "http://purl.org/dc/elements/1.1/date"},
        {"@id": "http://purl.org/dc/terms/date"}
      ],
      "rdfs:range": [{"@id": "http://www.w3.org/2000/01/rdf-schema#Literal"}],
      "dcterms:hasVersion": [{"@id": "http://dublincore.org/usage/terms/history/#dateCopyrighted-002"}]
    },
    {
      "@id": "http://purl.org/dc/terms/dateSubmitted",
      "rdfs:isDefinedBy": [{"@id": "http://purl.org/dc/terms/"}],
      "dcterms:issued": [
        {
          "@value": "2002-07-13",
          "@type": "xsd:date"
        }
      ],
      "dcterms:modified": [
        {
          "@value": "2008-01-14",
          "@type": "xsd:date"
        }
      ],
      "rdfs:label": ["Date Submitted"],
      "rdfs:comment": ["Date of submission of the resource."],
      "dcterms:description": ["Examples of resources to which a Date Submitted may be relevant are a thesis (submitted to a university department) or an article (submitted to a journal)."],
      "rdf:type": [{"@id": "http://www.w3.org/1999/02/22-rdf-syntax-ns#Property"}],
      "rdfs:subPropertyOf": [
        {"@id": "http://purl.org/dc/elements/1.1/date"},
        {"@id": "http://purl.org/dc/terms/date"}
      ],
      "rdfs:range": [{"@id": "http://www.w3.org/2000/01/rdf-schema#Literal"}],
      "dcterms:hasVersion": [{"@id": "http://dublincore.org/usage/terms/history/#dateSubmitted-002"}]
    },
    {
      "@id": "http://purl.org/dc/terms/description",
      "rdfs:isDefinedBy": [{"@id": "http://purl.org/dc/terms/"}],
      "dcterms:issued": [
        {
          "@value": "2008-01-14",
          "@type": "xsd:date"
        }
      ],
      "dcterms:modified": [
        {
          "@value": "2008-01-14",
          "@type": "xsd:date"
        }
      ],
      "rdfs:label": ["Description"],
      "rdfs:comment": ["An account of the resource."],
      "dcterms:description": ["Description may include but is not limited to: an abstract, a table of contents, a graphical representation, or a free-text account of the resource."],
      "rdf:type": [{"@id": "http://www.w3.org/1999/02/22-rdf-syntax-ns#Property"}],
      "rdfs:subPropertyOf": [{"@id": "http://purl.org/dc/elements/1.1/description"}],
      "dcterms:hasVersion": [{"@id": "http://dublincore.org/usage/terms/history/#descriptionT-001"}]
    },
    {
      "@id": "http://purl.org/dc/terms/educationLevel",
      "rdfs:isDefinedBy": [{"@id": "http://purl.org/dc/terms/"}],
      "dcterms:issued": [
        {
          "@value": "2002-07-13",
          "@type": "xsd:date"
        }
      ],
      "dcterms:modified": [
        {
          "@value": "2008-01-14",
          "@type": "xsd:date"
        }
      ],
      "rdfs:label": ["Audience Education Level"],
      "rdfs:comment": ["A class of entity, defined in terms of progression through an educational or training context, for which the described resource is intended."],
      "rdf:type": [{"@id": "http://www.w3.org/1999/02/22-rdf-syntax-ns#Property"}],
      "rdfs:subPropertyOf": [{"@id": "http://purl.org/dc/terms/audience"}],
      "rdfs:range": [{"@id": "http://purl.org/dc/terms/AgentClass"}],
      "dcterms:hasVersion": [{"@id": "http://dublincore.org/usage/terms/history/#educationLevel-002"}]
    },
    {
      "@id": "http://purl.org/dc/terms/extent",
      "rdfs:isDefinedBy": [{"@id": "http://purl.org/dc/terms/"}],
      "dcterms:issued": [
        {
          "@value": "2000-07-11",
          "@type": "xsd:date"
        }
      ],
      "dcterms:modified": [
        {
          "@value": "2008-01-14",
          "@type": "xsd:date"
        }
      ],
      "rdfs:label": ["Extent"],
      "rdfs:comment": ["The size or duration of the resource."],
      "rdf:type": [{"@id": "http://www.w3.org/1999/02/22-rdf-syntax-ns#Property"}],
      "rdfs:subPropertyOf": [
        {"@id": "http://purl.org/dc/elements/1.1/format"},
        {"@id": "http://purl.org/dc/terms/format"}
      ],
      "rdfs:range": [{"@id": "http://purl.org/dc/terms/SizeOrDuration"}],
      "dcterms:hasVersion": [{"@id": "http://dublincore.org/usage/terms/history/#extent-003"}]
    },
    {
      "@id": "http://purl.org/dc/terms/format",
      "rdfs:isDefinedBy": [{"@id": "http://purl.org/dc/terms/"}],
      "dcterms:issued": [
        {
          "@value": "2008-01-14",
          "@type": "xsd:date"
        }
      ],
      "dcterms:modified": [
        {
          "@value": "2008-01-14",
          "@type": "xsd:date"
        }
      ],
      "rdfs:label": ["Format"],
      "rdfs:comment": ["The file format, physical medium, or dimensions of the resource."],
      "dcterms:description": ["Examples of dimensions include size and duration. Recommended best practice is to use a controlled vocabulary such as the list of Internet Media Types [MIME]."],
      "rdf:type": [{"@id": "http://www.w3.org/1999/02/22-rdf-syntax-ns#Property"}],
      "rdfs:subPropertyOf": [{"@id": "http://purl.org/dc/elements/1.1/format"}],
      "rdfs:range": [{"@id": "http://purl.org/dc/terms/MediaTypeOrExtent"}],
      "dcterms:hasVersion": [{"@id": "http://dublincore.org/usage/terms/history/#formatT-001"}]
    },
    {
      "@id": "http://purl.org/dc/terms/hasFormat",
      "rdfs:isDefinedBy": [{"@id": "http://purl.org/dc/terms/"}],
      "dcterms:issued": [
        {
          "@value": "2000-07-11",
          "@type": "xsd:date"
        }
      ],
      "dcterms:modified": [
        {
          "@value": "2008-01-14",
          "@type": "xsd:date"
        }
      ],
      "rdfs:label": ["Has Format"],
      "rdfs:comment": ["A related resource that is substantially the same as the pre-existing described resource, but in another format."],
      "rdf:type": [{"@id": "http://www.w3.org/1999/02/22-rdf-syntax-ns#Property"}],
      "rdfs:subPropertyOf": [
        {"@id": "http://purl.org/dc/elements/1.1/relation"},
        {"@id": "http://purl.org/dc/terms/relation"}
      ],
      "dcterms:hasVersion": [{"@id": "http://dublincore.org/usage/terms/history/#hasFormat-003"}],
      "skos:note": ["This term is intended to be used with non-literal values as defined in the DCMI Abstract Model (http://dublincore.org/documents/abstract-model/).  As of December 2007, the DCMI Usage Board is seeking a way to express this intention with a formal range declaration."]
    },
    {
      "@id": "http://purl.org/dc/terms/hasPart",
      "rdfs:isDefinedBy": [{"@id": "http://purl.org/dc/terms/"}],
      "dcterms:issued": [
        {
          "@value": "2000-07-11",
          "@type": "xsd:date"
        }
      ],
      "dcterms:modified": [
        {
          "@value": "2008-01-14",
          "@type": "xsd:date"
        }
      ],
      "rdfs:label": ["Has Part"],
      "rdfs:comment": ["A related resource that is included either physically or logically in the described resource."],
      "rdf:type": [{"@id": "http://www.w3.org/1999/02/22-rdf-syntax-ns#Property"}],
      "rdfs:subPropertyOf": [
        {"@id": "http://purl.org/dc/elements/1.1/relation"},
        {"@id": "http://purl.org/dc/terms/relation"}
      ],
      "dcterms:hasVersion": [{"@id": "http://dublincore.org/usage/terms/history/#hasPart-003"}],
      "skos:note": ["This term is intended to be used with non-literal values as defined in the DCMI Abstract Model (http://dublincore.org/documents/abstract-model/).  As of December 2007, the DCMI Usage Board is seeking a way to express this intention with a formal range declaration."]
    },
    {
      "@id": "http://purl.org/dc/terms/hasVersion",
      "rdfs:isDefinedBy": [{"@id": "http://purl.org/dc/terms/"}],
      "dcterms:issued": [
        {
          "@value": "2000-07-11",
          "@type": "xsd:date"
        }
      ],
      "dcterms:modified": [
        {
          "@value": "2008-01-14",
          "@type": "xsd:date"
        }
      ],
      "rdfs:label": ["Has Version"],
      "rdfs:comment": ["A related resource that is a version, edition, or adaptation of the described resource."],
      "rdf:type": [{"@id": "http://www.w3.org/1999/02/22-rdf-syntax-ns#Property"}],
      "rdfs:subPropertyOf": [
        {"@id": "http://purl.org/dc/elements/1.1/relation"},
        {"@id": "http://purl.org/dc/terms/relation"}
      ],
      "dcterms:hasVersion": [{"@id": "http://dublincore.org/usage/terms/history/#hasVersion-003"}],
      "skos:note": ["This term is intended to be used with non-literal values as defined in the DCMI Abstract Model (http://dublincore.org/documents/abstract-model/).  As of December 2007, the DCMI Usage Board is seeking a way to express this intention with a formal range declaration."]
    },
    {
      "@id": "http://purl.org/dc/terms/identifier",
      "rdfs:isDefinedBy": [{"@id": "http://purl.org/dc/terms/"}],
      "dcterms:issued": [
        {
          "@value": "2008-01-14",
          "@type": "xsd:date"
        }
      ],
      "dcterms:modified": [
        {
          "@value": "2008-01-14",
          "@type": "xsd:date"
        }
      ],
      "rdfs:label": ["Identifier"],
      "rdfs:comment": ["An unambiguous reference to the resource within a given context."],
      "dcterms:description": ["Recommended best practice is to identify the resource by means of a string conforming to a formal identification system. "],
      "rdf:type": [{"@id": "http://www.w3.org/1999/02/22-rdf-syntax-ns#Property"}],
      "rdfs:subPropertyOf": [{"@id": "http://purl.org/dc/elements/1.1/identifier"}],
      "rdfs:range": [{"@id": "http://www.w3.org/2000/01/rdf-schema#Literal"}],
      "dcterms:hasVersion": [{"@id": "http://dublincore.org/usage/terms/history/#identifierT-001"}]
    },
    {
      "@id": "http://purl.org/dc/terms/instructionalMethod",
      "rdfs:isDefinedBy": [{"@id": "http://purl.org/dc/terms/"}],
      "dcterms:issued": [
        {
          "@value": "2005-06-13",
          "@type": "xsd:date"
        }
      ],
      "dcterms:modified": [
        {
          "@value": "2008-01-14",
          "@type": "xsd:date"
        }
      ],
      "rdfs:label": ["Instructional Method"],
      "rdfs:comment": ["A process, used to engender knowledge, attitudes and skills, that the described resource is designed to support."],
      "dcterms:description": ["Instructional Method will typically include ways of presenting instructional materials or conducting instructional activities, patterns of learner-to-learner and learner-to-instructor interactions, and mechanisms by which group and individual levels of learning are measured.  Instructional methods include all aspects of the instruction and learning processes from planning and implementation through evaluation and feedback."],
      "rdf:type": [{"@id": "http://www.w3.org/1999/02/22-rdf-syntax-ns#Property"}],
      "rdfs:range": [{"@id": "http://purl.org/dc/terms/MethodOfInstruction"}],
      "dcterms:hasVersion": [{"@id": "http://dublincore.org/usage/terms/history/#instructionalMethod-002"}]
    },
    {
      "@id": "http://purl.org/dc/terms/isFormatOf",
      "rdfs:isDefinedBy": [{"@id": "http://purl.org/dc/terms/"}],
      "dcterms:issued": [
        {
          "@value": "2000-07-11",
          "@type": "xsd:date"
        }
      ],
      "dcterms:modified": [
        {
          "@value": "2008-01-14",
          "@type": "xsd:date"
        }
      ],
      "rdfs:label": ["Is Format Of"],
      "rdfs:comment": ["A related resource that is substantially the same as the described resource, but in another format."],
      "rdf:type": [{"@id": "http://www.w3.org/1999/02/22-rdf-syntax-ns#Property"}],
      "rdfs:subPropertyOf": [
        {"@id": "http://purl.org/dc/elements/1.1/relation"},
        {"@id": "http://purl.org/dc/terms/relation"}
      ],
      "dcterms:hasVersion": [{"@id": "http://dublincore.org/usage/terms/history/#isFormatOf-003"}],
      "skos:note": ["This term is intended to be used with non-literal values as defined in the DCMI Abstract Model (http://dublincore.org/documents/abstract-model/).  As of December 2007, the DCMI Usage Board is seeking a way to express this intention with a formal range declaration."]
    },
    {
      "@id": "http://purl.org/dc/terms/isPartOf",
      "rdfs:isDefinedBy": [{"@id": "http://purl.org/dc/terms/"}],
      "dcterms:issued": [
        {
          "@value": "2000-07-11",
          "@type": "xsd:date"
        }
      ],
      "dcterms:modified": [
        {
          "@value": "2008-01-14",
          "@type": "xsd:date"
        }
      ],
      "rdfs:label": ["Is Part Of"],
      "rdfs:comment": ["A related resource in which the described resource is physically or logically included."],
      "rdf:type": [{"@id": "http://www.w3.org/1999/02/22-rdf-syntax-ns#Property"}],
      "rdfs:subPropertyOf": [
        {"@id": "http://purl.org/dc/elements/1.1/relation"},
        {"@id": "http://purl.org/dc/terms/relation"}
      ],
      "dcterms:hasVersion": [{"@id": "http://dublincore.org/usage/terms/history/#isPartOf-003"}],
      "skos:note": ["This term is intended to be used with non-literal values as defined in the DCMI Abstract Model (http://dublincore.org/documents/abstract-model/).  As of December 2007, the DCMI Usage Board is seeking a way to express this intention with a formal range declaration."]
    },
    {
      "@id": "http://purl.org/dc/terms/isReferencedBy",
      "rdfs:isDefinedBy": [{"@id": "http://purl.org/dc/terms/"}],
      "dcterms:issued": [
        {
          "@value": "2000-07-11",
          "@type": "xsd:date"
        }
      ],
      "dcterms:modified": [
        {
          "@value": "2008-01-14",
          "@type": "xsd:date"
        }
      ],
      "rdfs:label": ["Is Referenced By"],
      "rdfs:comment": ["A related resource that references, cites, or otherwise points to the described resource."],
      "rdf:type": [{"@id": "http://www.w3.org/1999/02/22-rdf-syntax-ns#Property"}],
      "rdfs:subPropertyOf": [
        {"@id": "http://purl.org/dc/elements/1.1/relation"},
        {"@id": "http://purl.org/dc/terms/relation"}
      ],
      "dcterms:hasVersion": [{"@id": "http://dublincore.org/usage/terms/history/#isReferencedBy-003"}],
      "skos:note": ["This term is intended to be used with non-literal values as defined in the DCMI Abstract Model (http://dublincore.org/documents/abstract-model/).  As of December 2007, the DCMI Usage Board is seeking a way to express this intention with a formal range declaration."]
    },
    {
      "@id": "http://purl.org/dc/terms/isReplacedBy",
      "rdfs:isDefinedBy": [{"@id": "http://purl.org/dc/terms/"}],
      "dcterms:issued": [
        {
          "@value": "2000-07-11",
          "@type": "xsd:date"
        }
      ],
      "dcterms:modified": [
        {
          "@value": "2008-01-14",
          "@type": "xsd:date"
        }
      ],
      "rdfs:label": ["Is Replaced By"],
      "rdfs:comment": ["A related resource that supplants, displaces, or supersedes the described resource."],
      "rdf:type": [{"@id": "http://www.w3.org/1999/02/22-rdf-syntax-ns#Property"}],
      "rdfs:subPropertyOf": [
        {"@id": "http://purl.org/dc/elements/1.1/relation"},
        {"@id": "http://purl.org/dc/terms/relation"}
      ],
      "dcterms:hasVersion": [{"@id": "http://dublincore.org/usage/terms/history/#isReplacedBy-003"}],
      "skos:note": ["This term is intended to be used with non-literal values as defined in the DCMI Abstract Model (http://dublincore.org/documents/abstract-model/).  As of December 2007, the DCMI Usage Board is seeking a way to express this intention with a formal range declaration."]
    },
    {
      "@id": "http://purl.org/dc/terms/isRequiredBy",
      "rdfs:isDefinedBy": [{"@id": "http://purl.org/dc/terms/"}],
      "dcterms:issued": [
        {
          "@value": "2000-07-11",
          "@type": "xsd:date"
        }
      ],
      "dcterms:modified": [
        {
          "@value": "2008-01-14",
          "@type": "xsd:date"
        }
      ],
      "rdfs:label": ["Is Required By"],
      "rdfs:comment": ["A related resource that requires the described resource to support its function, delivery, or coherence."],
      "rdf:type": [{"@id": "http://www.w3.org/1999/02/22-rdf-syntax-ns#Property"}],
      "rdfs:subPropertyOf": [
        {"@id": "http://purl.org/dc/elements/1.1/relation"},
        {"@id": "http://purl.org/dc/terms/relation"}
      ],
      "dcterms:hasVersion": [{"@id": "http://dublincore.org/usage/terms/history/#isRequiredBy-003"}],
      "skos:note": ["This term is intended to be used with non-literal values as defined in the DCMI Abstract Model (http://dublincore.org/documents/abstract-model/).  As of December 2007, the DCMI Usage Board is seeking a way to express this intention with a formal range declaration."]
    },
    {
      "@id": "http://purl.org/dc/terms/issued",
      "rdfs:isDefinedBy": [{"@id": "http://purl.org/dc/terms/"}],
      "dcterms:issued": [
        {
          "@value": "2000-07-11",
          "@type": "xsd:date"
        }
      ],
      "dcterms:modified": [
        {
          "@value": "2008-01-14",
          "@type": "xsd:date"
        }
      ],
      "rdfs:label": ["Date Issued"],
      "rdfs:comment": ["Date of formal issuance (e.g., publication) of the resource."],
      "rdf:type": [{"@id": "http://www.w3.org/1999/02/22-rdf-syntax-ns#Property"}],
      "rdfs:subPropertyOf": [
        {"@id": "http://purl.org/dc/elements/1.1/date"},
        {"@id": "http://purl.org/dc/terms/date"}
      ],
      "rdfs:range": [{"@id": "http://www.w3.org/2000/01/rdf-schema#Literal"}],
      "dcterms:hasVersion": [{"@id": "http://dublincore.org/usage/terms/history/#issued-003"}]
    },
    {
      "@id": "http://purl.org/dc/terms/isVersionOf",
      "rdfs:isDefinedBy": [{"@id": "http://purl.org/dc/terms/"}],
      "dcterms:issued": [
        {
          "@value": "2000-07-11",
          "@type": "xsd:date"
        }
      ],
      "dcterms:modified": [
        {
          "@value": "2008-01-14",
          "@type": "xsd:date"
        }
      ],
      "rdfs:label": ["Is Version Of"],
      "rdfs:comment": ["A related resource of which the described resource is a version, edition, or adaptation."],
      "dcterms:description": ["Changes in version imply substantive changes in content rather than differences in format."],
      "rdf:type": [{"@id": "http://www.w3.org/1999/02/22-rdf-syntax-ns#Property"}],
      "rdfs:subPropertyOf": [
        {"@id": "http://purl.org/dc/elements/1.1/relation"},
        {"@id": "http://purl.org/dc/terms/relation"}
      ],
      "dcterms:hasVersion": [{"@id": "http://dublincore.org/usage/terms/history/#isVersionOf-003"}],
      "skos:note": ["This term is intended to be used with non-literal values as defined in the DCMI Abstract Model (http://dublincore.org/documents/abstract-model/).  As of December 2007, the DCMI Usage Board is seeking a way to express this intention with a formal range declaration."]
    },
    {
      "@id": "http://purl.org/dc/terms/language",
      "rdfs:isDefinedBy": [{"@id": "http://purl.org/dc/terms/"}],
      "dcterms:issued": [
        {
          "@value": "2008-01-14",
          "@type": "xsd:date"
        }
      ],
      "dcterms:modified": [
        {
          "@value": "2008-01-14",
          "@type": "xsd:date"
        }
      ],
      "rdfs:label": ["Language"],
      "rdfs:comment": ["A language of the resource."],
      "dcterms:description": ["Recommended best practice is to use a controlled vocabulary such as RFC 4646 [RFC4646]."],
      "rdf:type": [{"@id": "http://www.w3.org/1999/02/22-rdf-syntax-ns#Property"}],
      "rdfs:subPropertyOf": [{"@id": "http://purl.org/dc/elements/1.1/language"}],
      "rdfs:range": [{"@id": "http://purl.org/dc/terms/LinguisticSystem"}],
      "dcterms:hasVersion": [{"@id": "http://dublincore.org/usage/terms/history/#languageT-001"}]
    },
    {
      "@id": "http://purl.org/dc/terms/license",
      "rdfs:isDefinedBy": [{"@id": "http://purl.org/dc/terms/"}],
      "dcterms:issued": [
        {
          "@value": "2004-06-14",
          "@type": "xsd:date"
        }
      ],
      "dcterms:modified": [
        {
          "@value": "2008-01-14",
          "@type": "xsd:date"
        }
      ],
      "rdfs:label": ["License"],
      "rdfs:comment": ["A legal document giving official permission to do something with the resource."],
      "rdf:type": [{"@id": "http://www.w3.org/1999/02/22-rdf-syntax-ns#Property"}],
      "rdfs:subPropertyOf": [
        {"@id": "http://purl.org/dc/elements/1.1/rights"},
        {"@id": "http://purl.org/dc/terms/rights"}
      ],
      "rdfs:range": [{"@id": "http://purl.org/dc/terms/LicenseDocument"}],
      "dcterms:hasVersion": [{"@id": "http://dublincore.org/usage/terms/history/#license-002"}]
    },
    {
      "@id": "http://purl.org/dc/terms/mediator",
      "rdfs:isDefinedBy": [{"@id": "http://purl.org/dc/terms/"}],
      "dcterms:issued": [
        {
          "@value": "2001-05-21",
          "@type": "xsd:date"
        }
      ],
      "dcterms:modified": [
        {
          "@value": "2008-01-14",
          "@type": "xsd:date"
        }
      ],
      "rdfs:label": ["Mediator"],
      "rdfs:comment": ["An entity that mediates access to the resource and for whom the resource is intended or useful."],
      "dcterms:description": ["In an educational context, a mediator might be a parent, teacher, teaching assistant, or care-giver."],
      "rdf:type": [{"@id": "http://www.w3.org/1999/02/22-rdf-syntax-ns#Property"}],
      "rdfs:subPropertyOf": [{"@id": "http://purl.org/dc/terms/audience"}],
      "rdfs:range": [{"@id": "http://purl.org/dc/terms/AgentClass"}],
      "dcterms:hasVersion": [{"@id": "http://dublincore.org/usage/terms/history/#mediator-003"}]
    },
    {
      "@id": "http://purl.org/dc/terms/medium",
      "rdfs:isDefinedBy": [{"@id": "http://purl.org/dc/terms/"}],
      "dcterms:issued": [
        {
          "@value": "2000-07-11",
          "@type": "xsd:date"
        }
      ],
      "dcterms:modified": [
        {
          "@value": "2008-01-14",
          "@type": "xsd:date"
        }
      ],
      "rdfs:label": ["Medium"],
      "rdfs:comment": ["The material or physical carrier of the resource."],
      "rdf:type": [{"@id": "http://www.w3.org/1999/02/22-rdf-syntax-ns#Property"}],
      "rdfs:subPropertyOf": [
        {"@id": "http://purl.org/dc/elements/1.1/format"},
        {"@id": "http://purl.org/dc/terms/format"}
      ],
      "rdfs:domain": [{"@id": "http://purl.org/dc/terms/PhysicalResource"}],
      "rdfs:range": [{"@id": "http://purl.org/dc/terms/PhysicalMedium"}],
      "dcterms:hasVersion": [{"@id": "http://dublincore.org/usage/terms/history/#medium-003"}]
    },
    {
      "@id": "http://purl.org/dc/terms/modified",
      "rdfs:isDefinedBy": [{"@id": "http://purl.org/dc/terms/"}],
      "dcterms:issued": [
        {
          "@value": "2000-07-11",
          "@type": "xsd:date"
        }
      ],
      "dcterms:modified": [
        {
          "@value": "2008-01-14",
          "@type": "xsd:date"
        }
      ],
      "rdfs:label": ["Date Modified"],
      "rdfs:comment": ["Date on which the resource was changed."],
      "rdf:type": [{"@id": "http://www.w3.org/1999/02/22-rdf-syntax-ns#Property"}],
      "rdfs:subPropertyOf": [
        {"@id": "http://purl.org/dc/elements/1.1/date"},
        {"@id": "http://purl.org/dc/terms/date"}
      ],
      "rdfs:range": [{"@id": "http://www.w3.org/2000/01/rdf-schema#Literal"}],
      "dcterms:hasVersion": [{"@id": "http://dublincore.org/usage/terms/history/#modified-003"}]
    },
    {
      "@id": "http://purl.org/dc/terms/provenance",
      "rdfs:isDefinedBy": [{"@id": "http://purl.org/dc/terms/"}],
      "dcterms:issued": [
        {
          "@value": "2004-09-20",
          "@type": "xsd:date"
        }
      ],
      "dcterms:modified": [
        {
          "@value": "2008-01-14",
          "@type": "xsd:date"
        }
      ],
      "rdfs:label": ["Provenance"],
      "rdfs:comment": ["A statement of any changes in ownership and custody of the resource since its creation that are significant for its authenticity, integrity, and interpretation."],
      "dcterms:description": ["The statement may include a description of any changes successive custodians made to the resource."],
      "rdf:type": [{"@id": "http://www.w3.org/1999/02/22-rdf-syntax-ns#Property"}],
      "rdfs:range": [{"@id": "http://purl.org/dc/terms/ProvenanceStatement"}],
      "dcterms:hasVersion": [{"@id": "http://dublincore.org/usage/terms/history/#provenance-002"}]
    },
    {
      "@id": "http://purl.org/dc/terms/publisher",
      "rdfs:isDefinedBy": [{"@id": "http://purl.org/dc/terms/"}],
      "dcterms:issued": [
        {
          "@value": "2008-01-14",
          "@type": "xsd:date"
        }
      ],
      "dcterms:modified": [
        {
          "@value": "2010-10-11",
          "@type": "xsd:date"
        }
      ],
      "rdfs:label": ["Publisher"],
      "rdfs:comment": ["An entity responsible for making the resource available."],
      "dcterms:description": ["Examples of a Publisher include a person, an organization, or a service."],
      "rdf:type": [{"@id": "http://www.w3.org/1999/02/22-rdf-syntax-ns#Property"}],
      "rdfs:subPropertyOf": [{"@id": "http://purl.org/dc/elements/1.1/publisher"}],
      "rdfs:range": [{"@id": "http://purl.org/dc/terms/Agent"}],
      "dcterms:hasVersion": [{"@id": "http://dublincore.org/usage/terms/history/#publisherT-001"}]
    },
    {
      "@id": "http://purl.org/dc/terms/references",
      "rdfs:isDefinedBy": [{"@id": "http://purl.org/dc/terms/"}],
      "dcterms:issued": [
        {
          "@value": "2000-07-11",
          "@type": "xsd:date"
        }
      ],
      "dcterms:modified": [
        {
          "@value": "2008-01-14",
          "@type": "xsd:date"
        }
      ],
      "rdfs:label": ["References"],
      "rdfs:comment": ["A related resource that is referenced, cited, or otherwise pointed to by the described resource."],
      "rdf:type": [{"@id": "http://www.w3.org/1999/02/22-rdf-syntax-ns#Property"}],
      "rdfs:subPropertyOf": [
        {"@id": "http://purl.org/dc/elements/1.1/relation"},
        {"@id": "http://purl.org/dc/terms/relation"}
      ],
      "dcterms:hasVersion": [{"@id": "http://dublincore.org/usage/terms/history/#references-003"}],
      "skos:note": ["This term is intended to be used with non-literal values as defined in the DCMI Abstract Model (http://dublincore.org/documents/abstract-model/).  As of December 2007, the DCMI Usage Board is seeking a way to express this intention with a formal range declaration."]
    },
    {
      "@id": "http://purl.org/dc/terms/relation",
      "rdfs:isDefinedBy": [{"@id": "http://purl.org/dc/terms/"}],
      "dcterms:issued": [
        {
          "@value": "2008-01-14",
          "@type": "xsd:date"
        }
      ],
      "dcterms:modified": [
        {
          "@value": "2008-01-14",
          "@type": "xsd:date"
        }
      ],
      "rdfs:label": ["Relation"],
      "rdfs:comment": ["A related resource."],
      "dcterms:description": ["Recommended best practice is to identify the related resource by means of a string conforming to a formal identification system. "],
      "rdf:type": [{"@id": "http://www.w3.org/1999/02/22-rdf-syntax-ns#Property"}],
      "rdfs:subPropertyOf": [{"@id": "http://purl.org/dc/elements/1.1/relation"}],
      "dcterms:hasVersion": [{"@id": "http://dublincore.org/usage/terms/history/#relationT-001"}],
      "skos:note": ["This term is intended to be used with non-literal values as defined in the DCMI Abstract Model (http://dublincore.org/documents/abstract-model/).  As of December 2007, the DCMI Usage Board is seeking a way to express this intention with a formal range declaration."]
    },
    {
      "@id": "http://purl.org/dc/terms/replaces",
      "rdfs:isDefinedBy": [{"@id": "http://purl.org/dc/terms/"}],
      "dcterms:issued": [
        {
          "@value": "2000-07-11",
          "@type": "xsd:date"
        }
      ],
      "dcterms:modified": [
        {
          "@value": "2008-01-14",
          "@type": "xsd:date"
        }
      ],
      "rdfs:label": ["Replaces"],
      "rdfs:comment": ["A related resource that is supplanted, displaced, or superseded by the described resource."],
      "rdf:type": [{"@id": "http://www.w3.org/1999/02/22-rdf-syntax-ns#Property"}],
      "rdfs:subPropertyOf": [
        {"@id": "http://purl.org/dc/elements/1.1/relation"},
        {"@id": "http://purl.org/dc/terms/relation"}
      ],
      "dcterms:hasVersion": [{"@id": "http://dublincore.org/usage/terms/history/#replaces-003"}],
      "skos:note": ["This term is intended to be used with non-literal values as defined in the DCMI Abstract Model (http://dublincore.org/documents/abstract-model/).  As of December 2007, the DCMI Usage Board is seeking a way to express this intention with a formal range declaration."]
    },
    {
      "@id": "http://purl.org/dc/terms/requires",
      "rdfs:isDefinedBy": [{"@id": "http://purl.org/dc/terms/"}],
      "dcterms:issued": [
        {
          "@value": "2000-07-11",
          "@type": "xsd:date"
        }
      ],
      "dcterms:modified": [
        {
          "@value": "2008-01-14",
          "@type": "xsd:date"
        }
      ],
      "rdfs:label": ["Requires"],
      "rdfs:comment": ["A related resource that is required by the described resource to support its function, delivery, or coherence."],
      "rdf:type": [{"@id": "http://www.w3.org/1999/02/22-rdf-syntax-ns#Property"}],
      "rdfs:subPropertyOf": [
        {"@id": "http://purl.org/dc/elements/1.1/relation"},
        {"@id": "http://purl.org/dc/terms/relation"}
      ],
      "dcterms:hasVersion": [{"@id": "http://dublincore.org/usage/terms/history/#requires-003"}],
      "skos:note": ["This term is intended to be used with non-literal values as defined in the DCMI Abstract Model (http://dublincore.org/documents/abstract-model/).  As of December 2007, the DCMI Usage Board is seeking a way to express this intention with a formal range declaration."]
    },
    {
      "@id": "http://purl.org/dc/terms/rights",
      "rdfs:isDefinedBy": [{"@id": "http://purl.org/dc/terms/"}],
      "dcterms:issued": [
        {
          "@value": "2008-01-14",
          "@type": "xsd:date"
        }
      ],
      "dcterms:modified": [
        {
          "@value": "2008-01-14",
          "@type": "xsd:date"
        }
      ],
      "rdfs:label": ["Rights"],
      "rdfs:comment": ["Information about rights held in and over the resource."],
      "dcterms:description": ["Typically, rights information includes a statement about various property rights associated with the resource, including intellectual property rights."],
      "rdf:type": [{"@id": "http://www.w3.org/1999/02/22-rdf-syntax-ns#Property"}],
      "rdfs:subPropertyOf": [{"@id": "http://purl.org/dc/elements/1.1/rights"}],
      "rdfs:range": [{"@id": "http://purl.org/dc/terms/RightsStatement"}],
      "dcterms:hasVersion": [{"@id": "http://dublincore.org/usage/terms/history/#rightsT-001"}]
    },
    {
      "@id": "http://purl.org/dc/terms/rightsHolder",
      "rdfs:isDefinedBy": [{"@id": "http://purl.org/dc/terms/"}],
      "dcterms:issued": [
        {
          "@value": "2004-06-14",
          "@type": "xsd:date"
        }
      ],
      "dcterms:modified": [
        {
          "@value": "2008-01-14",
          "@type": "xsd:date"
        }
      ],
      "rdfs:label": ["Rights Holder"],
      "rdfs:comment": ["A person or organization owning or managing rights over the resource."],
      "rdf:type": [{"@id": "http://www.w3.org/1999/02/22-rdf-syntax-ns#Property"}],
      "rdfs:range": [{"@id": "http://purl.org/dc/terms/Agent"}],
      "dcterms:hasVersion": [{"@id": "http://dublincore.org/usage/terms/history/#rightsHolder-002"}]
    },
    {
      "@id": "http://purl.org/dc/terms/source",
      "rdfs:isDefinedBy": [{"@id": "http://purl.org/dc/terms/"}],
      "dcterms:issued": [
        {
          "@value": "2008-01-14",
          "@type": "xsd:date"
        }
      ],
      "dcterms:modified": [
        {
          "@value": "2008-01-14",
          "@type": "xsd:date"
        }
      ],
      "rdfs:label": ["Source"],
      "rdfs:comment": ["A related resource from which the described resource is derived."],
      "dcterms:description": ["The described resource may be derived from the related resource in whole or in part. Recommended best practice is to identify the related resource by means of a string conforming to a formal identification system."],
      "rdf:type": [{"@id": "http://www.w3.org/1999/02/22-rdf-syntax-ns#Property"}],
      "rdfs:subPropertyOf": [
        {"@id": "http://purl.org/dc/elements/1.1/source"},
        {"@id": "http://purl.org/dc/terms/relation"}
      ],
      "dcterms:hasVersion": [{"@id": "http://dublincore.org/usage/terms/history/#sourceT-001"}],
      "skos:note": ["This term is intended to be used with non-literal values as defined in the DCMI Abstract Model (http://dublincore.org/documents/abstract-model/).  As of December 2007, the DCMI Usage Board is seeking a way to express this intention with a formal range declaration."]
    },
    {
      "@id": "http://purl.org/dc/terms/spatial",
      "rdfs:isDefinedBy": [{"@id": "http://purl.org/dc/terms/"}],
      "dcterms:issued": [
        {
          "@value": "2000-07-11",
          "@type": "xsd:date"
        }
      ],
      "dcterms:modified": [
        {
          "@value": "2008-01-14",
          "@type": "xsd:date"
        }
      ],
      "rdfs:label": ["Spatial Coverage"],
      "rdfs:comment": ["Spatial characteristics of the resource."],
      "rdf:type": [{"@id": "http://www.w3.org/1999/02/22-rdf-syntax-ns#Property"}],
      "rdfs:subPropertyOf": [
        {"@id": "http://purl.org/dc/elements/1.1/coverage"},
        {"@id": "http://purl.org/dc/terms/coverage"}
      ],
      "rdfs:range": [{"@id": "http://purl.org/dc/terms/Location"}],
      "dcterms:hasVersion": [{"@id": "http://dublincore.org/usage/terms/history/#spatial-003"}]
    },
    {
      "@id": "http://purl.org/dc/terms/subject",
      "rdfs:isDefinedBy": [{"@id": "http://purl.org/dc/terms/"}],
      "dcterms:issued": [
        {
          "@value": "2008-01-14",
          "@type": "xsd:date"
        }
      ],
      "dcterms:modified": [
        {
          "@value": "2012-06-14",
          "@type": "xsd:date"
        }
      ],
      "rdfs:label": ["Subject"],
      "rdfs:comment": ["The topic of the resource."],
      "dcterms:description": ["Typically, the subject will be represented using keywords, key phrases, or classification codes. Recommended best practice is to use a controlled vocabulary."],
      "rdf:type": [{"@id": "http://www.w3.org/1999/02/22-rdf-syntax-ns#Property"}],
      "rdfs:subPropertyOf": [{"@id": "http://purl.org/dc/elements/1.1/subject"}],
      "dcterms:hasVersion": [{"@id": "http://dublincore.org/usage/terms/history/#subjectT-002"}],
      "skos:note": ["This term is intended to be used with non-literal values as defined in the DCMI Abstract Model (http://dublincore.org/documents/abstract-model/).  As of December 2007, the DCMI Usage Board is seeking a way to express this intention with a formal range declaration."]
    },
    {
      "@id": "http://purl.org/dc/terms/tableOfContents",
      "rdfs:isDefinedBy": [{"@id": "http://purl.org/dc/terms/"}],
      "dcterms:issued": [
        {
          "@value": "2000-07-11",
          "@type": "xsd:date"
        }
      ],
      "dcterms:modified": [
        {
          "@value": "2008-01-14",
          "@type": "xsd:date"
        }
      ],
      "rdfs:label": ["Table Of Contents"],
      "rdfs:comment": ["A list of subunits of the resource."],
      "rdf:type": [{"@id": "http://www.w3.org/1999/02/22-rdf-syntax-ns#Property"}],
      "rdfs:subPropertyOf": [
        {"@id": "http://purl.org/dc/elements/1.1/description"},
        {"@id": "http://purl.org/dc/terms/description"}
      ],
      "dcterms:hasVersion": [{"@id": "http://dublincore.org/usage/terms/history/#tableOfContents-003"}]
    },
    {
      "@id": "http://purl.org/dc/terms/temporal",
      "rdfs:isDefinedBy": [{"@id": "http://purl.org/dc/terms/"}],
      "dcterms:issued": [
        {
          "@value": "2000-07-11",
          "@type": "xsd:date"
        }
      ],
      "dcterms:modified": [
        {
          "@value": "2008-01-14",
          "@type": "xsd:date"
        }
      ],
      "rdfs:label": ["Temporal Coverage"],
      "rdfs:comment": ["Temporal characteristics of the resource."],
      "rdf:type": [{"@id": "http://www.w3.org/1999/02/22-rdf-syntax-ns#Property"}],
      "rdfs:subPropertyOf": [
        {"@id": "http://purl.org/dc/elements/1.1/coverage"},
        {"@id": "http://purl.org/dc/terms/coverage"}
      ],
      "rdfs:range": [{"@id": "http://purl.org/dc/terms/PeriodOfTime"}],
      "dcterms:hasVersion": [{"@id": "http://dublincore.org/usage/terms/history/#temporal-003"}]
    },
    {
      "@id": "http://purl.org/dc/terms/title",
      "rdfs:isDefinedBy": [{"@id": "http://purl.org/dc/terms/"}],
      "dcterms:issued": [
        {
          "@value": "2008-01-14",
          "@type": "xsd:date"
        }
      ],
      "dcterms:modified": [
        {
          "@value": "2010-10-11",
          "@type": "xsd:date"
        }
      ],
      "rdfs:label": ["Title"],
      "rdfs:comment": ["A name given to the resource."],
      "rdf:type": [{"@id": "http://www.w3.org/1999/02/22-rdf-syntax-ns#Property"}],
      "rdfs:subPropertyOf": [{"@id": "http://purl.org/dc/elements/1.1/title"}],
      "dcterms:hasVersion": [{"@id": "http://dublincore.org/usage/terms/history/#titleT-002"}],
      "rdfs:range": [{"@id": "http://www.w3.org/2000/01/rdf-schema#Literal"}]
    },
    {
      "@id": "http://purl.org/dc/terms/type",
      "rdfs:isDefinedBy": [{"@id": "http://purl.org/dc/terms/"}],
      "dcterms:issued": [
        {
          "@value": "2008-01-14",
          "@type": "xsd:date"
        }
      ],
      "dcterms:modified": [
        {
          "@value": "2008-01-14",
          "@type": "xsd:date"
        }
      ],
      "rdfs:label": ["Type"],
      "rdfs:comment": ["The nature or genre of the resource."],
      "dcterms:description": ["Recommended best practice is to use a controlled vocabulary such as the DCMI Type Vocabulary [DCMITYPE]. To describe the file format, physical medium, or dimensions of the resource, use the Format element."],
      "rdf:type": [{"@id": "http://www.w3.org/1999/02/22-rdf-syntax-ns#Property"}],
      "rdfs:subPropertyOf": [{"@id": "http://purl.org/dc/elements/1.1/type"}],
      "rdfs:range": [{"@id": "http://www.w3.org/2000/01/rdf-schema#Class"}],
      "dcterms:hasVersion": [{"@id": "http://dublincore.org/usage/terms/history/#typeT-001"}]
    },
    {
      "@id": "http://purl.org/dc/terms/valid",
      "rdfs:isDefinedBy": [{"@id": "http://purl.org/dc/terms/"}],
      "dcterms:issued": [
        {
          "@value": "2000-07-11",
          "@type": "xsd:date"
        }
      ],
      "dcterms:modified": [
        {
          "@value": "2008-01-14",
          "@type": "xsd:date"
        }
      ],
      "rdfs:label": ["Date Valid"],
      "rdfs:comment": ["Date (often a range) of validity of a resource."],
      "rdf:type": [{"@id": "http://www.w3.org/1999/02/22-rdf-syntax-ns#Property"}],
      "rdfs:subPropertyOf": [
        {"@id": "http://purl.org/dc/elements/1.1/date"},
        {"@id": "http://purl.org/dc/terms/date"}
      ],
      "rdfs:range": [{"@id": "http://www.w3.org/2000/01/rdf-schema#Literal"}],
      "dcterms:hasVersion": [{"@id": "http://dublincore.org/usage/terms/history/#valid-003"}]
    },
    {
      "@id": "http://purl.org/dc/elements/1.1/contributor",
      "rdfs:isDefinedBy": [{"@id": "http://purl.org/dc/elements/1.1/"}],
      "dcterms:issued": [
        {
          "@value": "1999-07-02",
          "@type": "xsd:date"
        }
      ],
      "dcterms:modified": [
        {
          "@value": "2008-01-14",
          "@type": "xsd:date"
        }
      ],
      "rdfs:label": ["Contributor"],
      "rdfs:comment": ["An entity responsible for making contributions to the resource."],
      "dcterms:description": ["Examples of a Contributor include a person, an organization, or a service. Typically, the name of a Contributor should be used to indicate the entity."],
      "rdf:type": [{"@id": "http://www.w3.org/1999/02/22-rdf-syntax-ns#Property"}],
      "dcterms:hasVersion": [{"@id": "http://dublincore.org/usage/terms/history/#contributor-006"}],
      "skos:note": ["A second property with the same name as this property has been declared in the dcterms: namespace (http://purl.org/dc/terms/).  See the Introduction to the document \"DCMI Metadata Terms\" (http://dublincore.org/documents/dcmi-terms/) for an explanation."]
    },
    {
      "@id": "http://purl.org/dc/elements/1.1/coverage",
      "rdfs:isDefinedBy": [{"@id": "http://purl.org/dc/elements/1.1/"}],
      "dcterms:issued": [
        {
          "@value": "1999-07-02",
          "@type": "xsd:date"
        }
      ],
      "dcterms:modified": [
        {
          "@value": "2008-01-14",
          "@type": "xsd:date"
        }
      ],
      "rdfs:label": ["Coverage"],
      "rdfs:comment": ["The spatial or temporal topic of the resource, the spatial applicability of the resource, or the jurisdiction under which the resource is relevant."],
      "dcterms:description": ["Spatial topic and spatial applicability may be a named place or a location specified by its geographic coordinates. Temporal topic may be a named period, date, or date range. A jurisdiction may be a named administrative entity or a geographic place to which the resource applies. Recommended best practice is to use a controlled vocabulary such as the Thesaurus of Geographic Names [TGN]. Where appropriate, named places or time periods can be used in preference to numeric identifiers such as sets of coordinates or date ranges."],
      "rdf:type": [{"@id": "http://www.w3.org/1999/02/22-rdf-syntax-ns#Property"}],
      "dcterms:hasVersion": [{"@id": "http://dublincore.org/usage/terms/history/#coverage-006"}],
      "skos:note": ["A second property with the same name as this property has been declared in the dcterms: namespace (http://purl.org/dc/terms/).  See the Introduction to the document \"DCMI Metadata Terms\" (http://dublincore.org/documents/dcmi-terms/) for an explanation."]
    },
    {
      "@id": "http://purl.org/dc/elements/1.1/creator",
      "rdfs:isDefinedBy": [{"@id": "http://purl.org/dc/elements/1.1/"}],
      "dcterms:issued": [
        {
          "@value": "1999-07-02",
          "@type": "xsd:date"
        }
      ],
      "dcterms:modified": [
        {
          "@value": "2008-01-14",
          "@type": "xsd:date"
        }
      ],
      "rdfs:label": ["Creator"],
      "rdfs:comment": ["An entity primarily responsible for making the resource."],
      "dcterms:description": ["Examples of a Creator include a person, an organization, or a service. Typically, the name of a Creator should be used to indicate the entity."],
      "rdf:type": [{"@id": "http://www.w3.org/1999/02/22-rdf-syntax-ns#Property"}],
      "dcterms:hasVersion": [{"@id": "http://dublincore.org/usage/terms/history/#creator-006"}],
      "skos:note": ["A second property with the same name as this property has been declared in the dcterms: namespace (http://purl.org/dc/terms/).  See the Introduction to the document \"DCMI Metadata Terms\" (http://dublincore.org/documents/dcmi-terms/) for an explanation."]
    },
    {
      "@id": "http://purl.org/dc/elements/1.1/date",
      "rdfs:isDefinedBy": [{"@id": "http://purl.org/dc/elements/1.1/"}],
      "dcterms:issued": [
        {
          "@value": "1999-07-02",
          "@type": "xsd:date"
        }
      ],
      "dcterms:modified": [
        {
          "@value": "2008-01-14",
          "@type": "xsd:date"
        }
      ],
      "rdfs:label": ["Date"],
      "rdfs:comment": ["A point or period of time associated with an event in the lifecycle of the resource."],
      "dcterms:description": ["Date may be used to express temporal information at any level of granularity.  Recommended best practice is to use an encoding scheme, such as the W3CDTF profile of ISO 8601 [W3CDTF]."],
      "rdf:type": [{"@id": "http://www.w3.org/1999/02/22-rdf-syntax-ns#Property"}],
      "dcterms:hasVersion": [{"@id": "http://dublincore.org/usage/terms/history/#date-006"}],
      "skos:note": ["A second property with the same name as this property has been declared in the dcterms: namespace (http://purl.org/dc/terms/).  See the Introduction to the document \"DCMI Metadata Terms\" (http://dublincore.org/documents/dcmi-terms/) for an explanation."]
    },
    {
      "@id": "http://purl.org/dc/elements/1.1/description",
      "rdfs:isDefinedBy": [{"@id": "http://purl.org/dc/elements/1.1/"}],
      "dcterms:issued": [
        {
          "@value": "1999-07-02",
          "@type": "xsd:date"
        }
      ],
      "dcterms:modified": [
        {
          "@value": "2008-01-14",
          "@type": "xsd:date"
        }
      ],
      "rdfs:label": ["Description"],
      "rdfs:comment": ["An account of the resource."],
      "dcterms:description": ["Description may include but is not limited to: an abstract, a table of contents, a graphical representation, or a free-text account of the resource."],
      "rdf:type": [{"@id": "http://www.w3.org/1999/02/22-rdf-syntax-ns#Property"}],
      "dcterms:hasVersion": [{"@id": "http://dublincore.org/usage/terms/history/#description-006"}],
      "skos:note": ["A second property with the same name as this property has been declared in the dcterms: namespace (http://purl.org/dc/terms/).  See the Introduction to the document \"DCMI Metadata Terms\" (http://dublincore.org/documents/dcmi-terms/) for an explanation."]
    },
    {
      "@id": "http://purl.org/dc/elements/1.1/format",
      "rdfs:isDefinedBy": [{"@id": "http://purl.org/dc/elements/1.1/"}],
      "dcterms:issued": [
        {
          "@value": "1999-07-02",
          "@type": "xsd:date"
        }
      ],
      "dcterms:modified": [
        {
          "@value": "2008-01-14",
          "@type": "xsd:date"
        }
      ],
      "rdfs:label": ["Format"],
      "rdfs:comment": ["The file format, physical medium, or dimensions of the resource."],
      "dcterms:description": ["Examples of dimensions include size and duration. Recommended best practice is to use a controlled vocabulary such as the list of Internet Media Types [MIME]."],
      "rdf:type": [{"@id": "http://www.w3.org/1999/02/22-rdf-syntax-ns#Property"}],
      "dcterms:hasVersion": [{"@id": "http://dublincore.org/usage/terms/history/#format-007"}],
      "skos:note": ["A second property with the same name as this property has been declared in the dcterms: namespace (http://purl.org/dc/terms/).  See the Introduction to the document \"DCMI Metadata Terms\" (http://dublincore.org/documents/dcmi-terms/) for an explanation."]
    },
    {
      "@id": "http://purl.org/dc/elements/1.1/identifier",
      "rdfs:isDefinedBy": [{"@id": "http://purl.org/dc/elements/1.1/"}],
      "dcterms:issued": [
        {
          "@value": "1999-07-02",
          "@type": "xsd:date"
        }
      ],
      "dcterms:modified": [
        {
          "@value": "2008-01-14",
          "@type": "xsd:date"
        }
      ],
      "rdfs:label": ["Identifier"],
      "rdfs:comment": ["An unambiguous reference to the resource within a given context."],
      "dcterms:description": ["Recommended best practice is to identify the resource by means of a string conforming to a formal identification system. "],
      "rdf:type": [{"@id": "http://www.w3.org/1999/02/22-rdf-syntax-ns#Property"}],
      "dcterms:hasVersion": [{"@id": "http://dublincore.org/usage/terms/history/#identifier-006"}],
      "skos:note": ["A second property with the same name as this property has been declared in the dcterms: namespace (http://purl.org/dc/terms/).  See the Introduction to the document \"DCMI Metadata Terms\" (http://dublincore.org/documents/dcmi-terms/) for an explanation."]
    },
    {
      "@id": "http://purl.org/dc/elements/1.1/language",
      "rdfs:isDefinedBy": [{"@id": "http://purl.org/dc/elements/1.1/"}],
      "dcterms:issued": [
        {
          "@value": "1999-07-02",
          "@type": "xsd:date"
        }
      ],
      "dcterms:modified": [
        {
          "@value": "2008-01-14",
          "@type": "xsd:date"
        }
      ],
      "rdfs:label": ["Language"],
      "rdfs:comment": ["A language of the resource."],
      "dcterms:description": ["Recommended best practice is to use a controlled vocabulary such as RFC 4646 [RFC4646]."],
      "rdfs:seeAlso": [{"@id": "http://www.ietf.org/rfc/rfc4646.txt"}],
      "rdf:type": [{"@id": "http://www.w3.org/1999/02/22-rdf-syntax-ns#Property"}],
      "dcterms:hasVersion": [{"@id": "http://dublincore.org/usage/terms/history/#language-007"}],
      "skos:note": ["A second property with the same name as this property has been declared in the dcterms: namespace (http://purl.org/dc/terms/).  See the Introduction to the document \"DCMI Metadata Terms\" (http://dublincore.org/documents/dcmi-terms/) for an explanation."]
    },
    {
      "@id": "http://purl.org/dc/elements/1.1/publisher",
      "rdfs:isDefinedBy": [{"@id": "http://purl.org/dc/elements/1.1/"}],
      "dcterms:issued": [
        {
          "@value": "1999-07-02",
          "@type": "xsd:date"
        }
      ],
      "dcterms:modified": [
        {
          "@value": "2008-01-14",
          "@type": "xsd:date"
        }
      ],
      "rdfs:label": ["Publisher"],
      "rdfs:comment": ["An entity responsible for making the resource available."],
      "dcterms:description": ["Examples of a Publisher include a person, an organization, or a service. Typically, the name of a Publisher should be used to indicate the entity."],
      "rdf:type": [{"@id": "http://www.w3.org/1999/02/22-rdf-syntax-ns#Property"}],
      "dcterms:hasVersion": [{"@id": "http://dublincore.org/usage/terms/history/#publisher-006"}],
      "skos:note": ["A second property with the same name as this property has been declared in the dcterms: namespace (http://purl.org/dc/terms/).  See the Introduction to the document \"DCMI Metadata Terms\" (http://dublincore.org/documents/dcmi-terms/) for an explanation."]
    },
    {
      "@id": "http://purl.org/dc/elements/1.1/relation",
      "rdfs:isDefinedBy": [{"@id": "http://purl.org/dc/elements/1.1/"}],
      "dcterms:issued": [
        {
          "@value": "1999-07-02",
          "@type": "xsd:date"
        }
      ],
      "dcterms:modified": [
        {
          "@value": "2008-01-14",
          "@type": "xsd:date"
        }
      ],
      "rdfs:label": ["Relation"],
      "rdfs:comment": ["A related resource."],
      "dcterms:description": ["Recommended best practice is to identify the related resource by means of a string conforming to a formal identification system. "],
      "rdf:type": [{"@id": "http://www.w3.org/1999/02/22-rdf-syntax-ns#Property"}],
      "dcterms:hasVersion": [{"@id": "http://dublincore.org/usage/terms/history/#relation-006"}],
      "skos:note": ["A second property with the same name as this property has been declared in the dcterms: namespace (http://purl.org/dc/terms/).  See the Introduction to the document \"DCMI Metadata Terms\" (http://dublincore.org/documents/dcmi-terms/) for an explanation."]
    },
    {
      "@id": "http://purl.org/dc/elements/1.1/rights",
      "rdfs:isDefinedBy": [{"@id": "http://purl.org/dc/elements/1.1/"}],
      "dcterms:issued": [
        {
          "@value": "1999-07-02",
          "@type": "xsd:date"
        }
      ],
      "dcterms:modified": [
        {
          "@value": "2008-01-14",
          "@type": "xsd:date"
        }
      ],
      "rdfs:label": ["Rights"],
      "rdfs:comment": ["Information about rights held in and over the resource."],
      "dcterms:description": ["Typically, rights information includes a statement about various property rights associated with the resource, including intellectual property rights."],
      "rdf:type": [{"@id": "http://www.w3.org/1999/02/22-rdf-syntax-ns#Property"}],
      "dcterms:hasVersion": [{"@id": "http://dublincore.org/usage/terms/history/#rights-006"}],
      "skos:note": ["A second property with the same name as this property has been declared in the dcterms: namespace (http://purl.org/dc/terms/).  See the Introduction to the document \"DCMI Metadata Terms\" (http://dublincore.org/documents/dcmi-terms/) for an explanation."]
    },
    {
      "@id": "http://purl.org/dc/elements/1.1/source",
      "rdfs:isDefinedBy": [{"@id": "http://purl.org/dc/elements/1.1/"}],
      "dcterms:issued": [
        {
          "@value": "1999-07-02",
          "@type": "xsd:date"
        }
      ],
      "dcterms:modified": [
        {
          "@value": "2008-01-14",
          "@type": "xsd:date"
        }
      ],
      "rdfs:label": ["Source"],
      "rdfs:comment": ["A related resource from which the described resource is derived."],
      "dcterms:description": ["The described resource may be derived from the related resource in whole or in part. Recommended best practice is to identify the related resource by means of a string conforming to a formal identification system."],
      "rdf:type": [{"@id": "http://www.w3.org/1999/02/22-rdf-syntax-ns#Property"}],
      "dcterms:hasVersion": [{"@id": "http://dublincore.org/usage/terms/history/#source-006"}],
      "skos:note": ["A second property with the same name as this property has been declared in the dcterms: namespace (http://purl.org/dc/terms/).  See the Introduction to the document \"DCMI Metadata Terms\" (http://dublincore.org/documents/dcmi-terms/) for an explanation."]
    },
    {
      "@id": "http://purl.org/dc/elements/1.1/subject",
      "rdfs:isDefinedBy": [{"@id": "http://purl.org/dc/elements/1.1/"}],
      "dcterms:issued": [
        {
          "@value": "1999-07-02",
          "@type": "xsd:date"
        }
      ],
      "dcterms:modified": [
        {
          "@value": "2012-06-14",
          "@type": "xsd:date"
        }
      ],
      "rdfs:label": ["Subject"],
      "rdfs:comment": ["The topic of the resource."],
      "dcterms:description": ["Typically, the subject will be represented using keywords, key phrases, or classification codes. Recommended best practice is to use a controlled vocabulary."],
      "rdf:type": [{"@id": "http://www.w3.org/1999/02/22-rdf-syntax-ns#Property"}],
      "dcterms:hasVersion": [{"@id": "http://dublincore.org/usage/terms/history/#subject-007"}],
      "skos:note": ["A second property with the same name as this property has been declared in the dcterms: namespace (http://purl.org/dc/terms/).  See the Introduction to the document \"DCMI Metadata Terms\" (http://dublincore.org/documents/dcmi-terms/) for an explanation."]
    },
    {
      "@id": "http://purl.org/dc/elements/1.1/title",
      "rdfs:isDefinedBy": [{"@id": "http://purl.org/dc/elements/1.1/"}],
      "dcterms:issued": [
        {
          "@value": "1999-07-02",
          "@type": "xsd:date"
        }
      ],
      "dcterms:modified": [
        {
          "@value": "2008-01-14",
          "@type": "xsd:date"
        }
      ],
      "rdfs:label": ["Title"],
      "rdfs:comment": ["A name given to the resource."],
      "rdf:type": [{"@id": "http://www.w3.org/1999/02/22-rdf-syntax-ns#Property"}],
      "dcterms:hasVersion": [{"@id": "http://dublincore.org/usage/terms/history/#title-006"}],
      "skos:note": ["A second property with the same name as this property has been declared in the dcterms: namespace (http://purl.org/dc/terms/).  See the Introduction to the document \"DCMI Metadata Terms\" (http://dublincore.org/documents/dcmi-terms/) for an explanation."]
    },
    {
      "@id": "http://purl.org/dc/elements/1.1/type",
      "rdfs:isDefinedBy": [{"@id": "http://purl.org/dc/elements/1.1/"}],
      "dcterms:issued": [
        {
          "@value": "1999-07-02",
          "@type": "xsd:date"
        }
      ],
      "dcterms:modified": [
        {
          "@value": "2008-01-14",
          "@type": "xsd:date"
        }
      ],
      "rdfs:label": ["Type"],
      "rdfs:comment": ["The nature or genre of the resource."],
      "dcterms:description": ["Recommended best practice is to use a controlled vocabulary such as the DCMI Type Vocabulary [DCMITYPE]. To describe the file format, physical medium, or dimensions of the resource, use the Format element."],
      "rdf:type": [{"@id": "http://www.w3.org/1999/02/22-rdf-syntax-ns#Property"}],
      "dcterms:hasVersion": [{"@id": "http://dublincore.org/usage/terms/history/#type-006"}],
      "skos:note": ["A second property with the same name as this property has been declared in the dcterms: namespace (http://purl.org/dc/terms/).  See the Introduction to the document \"DCMI Metadata Terms\" (http://dublincore.org/documents/dcmi-terms/) for an explanation."]
    },
    {
      "@id": "http://purl.org/dc/terms/DCMIType",
      "rdfs:isDefinedBy": [{"@id": "http://purl.org/dc/terms/"}],
      "dcterms:issued": [
        {
          "@value": "2000-07-11",
          "@type": "xsd:date"
        }
      ],
      "dcterms:modified": [
        {
          "@value": "2012-06-14",
          "@type": "xsd:date"
        }
      ],
      "rdfs:label": ["DCMI Type Vocabulary"],
      "rdfs:comment": ["The set of classes specified by the DCMI Type Vocabulary, used to categorize the nature or genre of the resource."],
      "rdfs:seeAlso": [{"@id": "http://purl.org/dc/dcmitype/"}],
      "rdf:type": [{"@id": "http://purl.org/dc/dcam/VocabularyEncodingScheme"}],
      "dcterms:hasVersion": [{"@id": "http://dublincore.org/usage/terms/history/#DCMIType-005"}]
    },
    {
      "@id": "http://purl.org/dc/terms/DDC",
      "rdfs:isDefinedBy": [{"@id": "http://purl.org/dc/terms/"}],
      "dcterms:issued": [
        {
          "@value": "2000-07-11",
          "@type": "xsd:date"
        }
      ],
      "dcterms:modified": [
        {
          "@value": "2008-01-14",
          "@type": "xsd:date"
        }
      ],
      "rdfs:label": ["DDC"],
      "rdfs:comment": ["The set of conceptual resources specified by the Dewey Decimal Classification."],
      "rdfs:seeAlso": [{"@id": "http://www.oclc.org/dewey/"}],
      "rdf:type": [{"@id": "http://purl.org/dc/dcam/VocabularyEncodingScheme"}],
      "dcterms:hasVersion": [{"@id": "http://dublincore.org/usage/terms/history/#DDC-003"}]
    },
    {
      "@id": "http://purl.org/dc/terms/IMT",
      "rdfs:isDefinedBy": [{"@id": "http://purl.org/dc/terms/"}],
      "dcterms:issued": [
        {
          "@value": "2000-07-11",
          "@type": "xsd:date"
        }
      ],
      "dcterms:modified": [
        {
          "@value": "2008-01-14",
          "@type": "xsd:date"
        }
      ],
      "rdfs:label": ["IMT"],
      "rdfs:comment": ["The set of media types specified by the Internet Assigned Numbers Authority."],
      "rdfs:seeAlso": [{"@id": "http://www.iana.org/assignments/media-types/"}],
      "rdf:type": [{"@id": "http://purl.org/dc/dcam/VocabularyEncodingScheme"}],
      "dcterms:hasVersion": [{"@id": "http://dublincore.org/usage/terms/history/#IMT-004"}]
    },
    {
      "@id": "http://purl.org/dc/terms/LCC",
      "rdfs:isDefinedBy": [{"@id": "http://purl.org/dc/terms/"}],
      "dcterms:issued": [
        {
          "@value": "2000-07-11",
          "@type": "xsd:date"
        }
      ],
      "dcterms:modified": [
        {
          "@value": "2008-01-14",
          "@type": "xsd:date"
        }
      ],
      "rdfs:label": ["LCC"],
      "rdfs:comment": ["The set of conceptual resources specified by the Library of Congress Classification."],
      "rdfs:seeAlso": [{"@id": "http://lcweb.loc.gov/catdir/cpso/lcco/lcco.html"}],
      "rdf:type": [{"@id": "http://purl.org/dc/dcam/VocabularyEncodingScheme"}],
      "dcterms:hasVersion": [{"@id": "http://dublincore.org/usage/terms/history/#LCC-003"}]
    },
    {
      "@id": "http://purl.org/dc/terms/LCSH",
      "rdfs:isDefinedBy": [{"@id": "http://purl.org/dc/terms/"}],
      "dcterms:issued": [
        {
          "@value": "2000-07-11",
          "@type": "xsd:date"
        }
      ],
      "dcterms:modified": [
        {
          "@value": "2008-01-14",
          "@type": "xsd:date"
        }
      ],
      "rdfs:label": ["LCSH"],
      "rdfs:comment": ["The set of labeled concepts specified by the Library of Congress Subject Headings."],
      "rdf:type": [{"@id": "http://purl.org/dc/dcam/VocabularyEncodingScheme"}],
      "dcterms:hasVersion": [{"@id": "http://dublincore.org/usage/terms/history/#LCSH-003"}]
    },
    {
      "@id": "http://purl.org/dc/terms/MESH",
      "rdfs:isDefinedBy": [{"@id": "http://purl.org/dc/terms/"}],
      "dcterms:issued": [
        {
          "@value": "2000-07-11",
          "@type": "xsd:date"
        }
      ],
      "dcterms:modified": [
        {
          "@value": "2008-01-14",
          "@type": "xsd:date"
        }
      ],
      "rdfs:label": ["MeSH"],
      "rdfs:comment": ["The set of labeled concepts specified by the Medical Subject Headings."],
      "rdfs:seeAlso": [{"@id": "http://www.nlm.nih.gov/mesh/meshhome.html"}],
      "rdf:type": [{"@id": "http://purl.org/dc/dcam/VocabularyEncodingScheme"}],
      "dcterms:hasVersion": [{"@id": "http://dublincore.org/usage/terms/history/#MESH-003"}]
    },
    {
      "@id": "http://purl.org/dc/terms/NLM",
      "rdfs:isDefinedBy": [{"@id": "http://purl.org/dc/terms/"}],
      "dcterms:issued": [
        {
          "@value": "2005-06-13",
          "@type": "xsd:date"
        }
      ],
      "dcterms:modified": [
        {
          "@value": "2008-01-14",
          "@type": "xsd:date"
        }
      ],
      "rdfs:label": ["NLM"],
      "rdfs:comment": ["The set of conceptual resources specified by the National Library of Medicine Classification."],
      "rdfs:seeAlso": [{"@id": "http://wwwcf.nlm.nih.gov/class/"}],
      "rdf:type": [{"@id": "http://purl.org/dc/dcam/VocabularyEncodingScheme"}],
      "dcterms:hasVersion": [{"@id": "http://dublincore.org/usage/terms/history/#NLM-002"}]
    },
    {
      "@id": "http://purl.org/dc/terms/TGN",
      "rdfs:isDefinedBy": [{"@id": "http://purl.org/dc/terms/"}],
      "dcterms:issued": [
        {
          "@value": "2000-07-11",
          "@type": "xsd:date"
        }
      ],
      "dcterms:modified": [
        {
          "@value": "2008-01-14",
          "@type": "xsd:date"
        }
      ],
      "rdfs:label": ["TGN"],
      "rdfs:comment": ["The set of places specified by the Getty Thesaurus of Geographic Names."],
      "rdfs:seeAlso": [{"@id": "http://www.getty.edu/research/tools/vocabulary/tgn/index.html"}],
      "rdf:type": [{"@id": "http://purl.org/dc/dcam/VocabularyEncodingScheme"}],
      "dcterms:hasVersion": [{"@id": "http://dublincore.org/usage/terms/history/#TGN-003"}]
    },
    {
      "@id": "http://purl.org/dc/terms/UDC",
      "rdfs:isDefinedBy": [{"@id": "http://purl.org/dc/terms/"}],
      "dcterms:issued": [
        {
          "@value": "2000-07-11",
          "@type": "xsd:date"
        }
      ],
      "dcterms:modified": [
        {
          "@value": "2008-01-14",
          "@type": "xsd:date"
        }
      ],
      "rdfs:label": ["UDC"],
      "rdfs:comment": ["The set of conceptual resources specified by the Universal Decimal Classification."],
      "rdfs:seeAlso": [{"@id": "http://www.udcc.org/"}],
      "rdf:type": [{"@id": "http://purl.org/dc/dcam/VocabularyEncodingScheme"}],
      "dcterms:hasVersion": [{"@id": "http://dublincore.org/usage/terms/history/#UDC-003"}]
    },
    {
      "@id": "http://purl.org/dc/terms/Box",
      "rdfs:isDefinedBy": [{"@id": "http://purl.org/dc/terms/"}],
      "dcterms:issued": [
        {
          "@value": "2000-07-11",
          "@type": "xsd:date"
        }
      ],
      "dcterms:modified": [
        {
          "@value": "2008-01-14",
          "@type": "xsd:date"
        }
      ],
      "rdfs:label": ["DCMI Box"],
      "rdfs:comment": ["The set of regions in space defined by their geographic coordinates according to the DCMI Box Encoding Scheme."],
      "rdfs:seeAlso": [{"@id": "http://dublincore.org/documents/dcmi-box/"}],
      "rdf:type": [{"@id": "http://www.w3.org/2000/01/rdf-schema#Datatype"}],
      "dcterms:hasVersion": [{"@id": "http://dublincore.org/usage/terms/history/#Box-003"}]
    },
    {
      "@id": "http://purl.org/dc/terms/ISO3166",
      "rdfs:isDefinedBy": [{"@id": "http://purl.org/dc/terms/"}],
      "dcterms:issued": [
        {
          "@value": "2000-07-11",
          "@type": "xsd:date"
        }
      ],
      "dcterms:modified": [
        {
          "@value": "2008-01-14",
          "@type": "xsd:date"
        }
      ],
      "rdfs:label": ["ISO 3166"],
      "rdfs:comment": ["The set of codes listed in ISO 3166-1 for the representation of names of countries."],
      "rdfs:seeAlso": [{"@id": "http://www.iso.org/iso/en/prods-services/iso3166ma/02iso-3166-code-lists/list-en1.html"}],
      "rdf:type": [{"@id": "http://www.w3.org/2000/01/rdf-schema#Datatype"}],
      "dcterms:hasVersion": [{"@id": "http://dublincore.org/usage/terms/history/#ISO3166-004"}]
    },
    {
      "@id": "http://purl.org/dc/terms/ISO639-2",
      "rdfs:isDefinedBy": [{"@id": "http://purl.org/dc/terms/"}],
      "dcterms:issued": [
        {
          "@value": "2000-07-11",
          "@type": "xsd:date"
        }
      ],
      "dcterms:modified": [
        {
          "@value": "2008-01-14",
          "@type": "xsd:date"
        }
      ],
      "rdfs:label": ["ISO 639-2"],
      "rdfs:comment": ["The three-letter alphabetic codes listed in ISO639-2 for the representation of names of languages."],
      "rdfs:seeAlso": [{"@id": "http://lcweb.loc.gov/standards/iso639-2/langhome.html"}],
      "rdf:type": [{"@id": "http://www.w3.org/2000/01/rdf-schema#Datatype"}],
      "dcterms:hasVersion": [{"@id": "http://dublincore.org/usage/terms/history/#ISO639-2-003"}]
    },
    {
      "@id": "http://purl.org/dc/terms/ISO639-3",
      "rdfs:isDefinedBy": [{"@id": "http://purl.org/dc/terms/"}],
      "dcterms:issued": [
        {
          "@value": "2008-01-14",
          "@type": "xsd:date"
        }
      ],
      "rdfs:label": ["ISO 639-3"],
      "rdfs:comment": ["The set of three-letter codes listed in ISO 639-3 for the representation of names of languages."],
      "rdfs:seeAlso": [{"@id": "http://www.sil.org/iso639-3/"}],
      "rdf:type": [{"@id": "http://www.w3.org/2000/01/rdf-schema#Datatype"}],
      "dcterms:hasVersion": [{"@id": "http://dublincore.org/usage/terms/history/#ISO639-3-001"}]
    },
    {
      "@id": "http://purl.org/dc/terms/Period",
      "rdfs:isDefinedBy": [{"@id": "http://purl.org/dc/terms/"}],
      "dcterms:issued": [
        {
          "@value": "2000-07-11",
          "@type": "xsd:date"
        }
      ],
      "dcterms:modified": [
        {
          "@value": "2008-01-14",
          "@type": "xsd:date"
        }
      ],
      "rdfs:label": ["DCMI Period"],
      "rdfs:comment": ["The set of time intervals defined by their limits according to the DCMI Period Encoding Scheme."],
      "rdfs:seeAlso": [{"@id": "http://dublincore.org/documents/dcmi-period/"}],
      "rdf:type": [{"@id": "http://www.w3.org/2000/01/rdf-schema#Datatype"}],
      "dcterms:hasVersion": [{"@id": "http://dublincore.org/usage/terms/history/#Period-003"}]
    },
    {
      "@id": "http://purl.org/dc/terms/Point",
      "rdfs:isDefinedBy": [{"@id": "http://purl.org/dc/terms/"}],
      "dcterms:issued": [
        {
          "@value": "2000-07-11",
          "@type": "xsd:date"
        }
      ],
      "dcterms:modified": [
        {
          "@value": "2008-01-14",
          "@type": "xsd:date"
        }
      ],
      "rdfs:label": ["DCMI Point"],
      "rdfs:comment": ["The set of points in space defined by their geographic coordinates according to the DCMI Point Encoding Scheme."],
      "rdfs:seeAlso": [{"@id": "http://dublincore.org/documents/dcmi-point/"}],
      "rdf:type": [{"@id": "http://www.w3.org/2000/01/rdf-schema#Datatype"}],
      "dcterms:hasVersion": [{"@id": "http://dublincore.org/usage/terms/history/#Point-003"}]
    },
    {
      "@id": "http://purl.org/dc/terms/RFC1766",
      "rdfs:isDefinedBy": [{"@id": "http://purl.org/dc/terms/"}],
      "dcterms:issued": [
        {
          "@value": "2000-07-11",
          "@type": "xsd:date"
        }
      ],
      "dcterms:modified": [
        {
          "@value": "2008-01-14",
          "@type": "xsd:date"
        }
      ],
      "rdfs:label": ["RFC 1766"],
      "rdfs:comment": ["The set of tags, constructed according to RFC 1766, for the identification of languages."],
      "rdfs:seeAlso": [{"@id": "http://www.ietf.org/rfc/rfc1766.txt"}],
      "rdf:type": [{"@id": "http://www.w3.org/2000/01/rdf-schema#Datatype"}],
      "dcterms:hasVersion": [{"@id": "http://dublincore.org/usage/terms/history/#RFC1766-003"}]
    },
    {
      "@id": "http://purl.org/dc/terms/RFC3066",
      "rdfs:isDefinedBy": [{"@id": "http://purl.org/dc/terms/"}],
      "dcterms:issued": [
        {
          "@value": "2002-07-13",
          "@type": "xsd:date"
        }
      ],
      "dcterms:modified": [
        {
          "@value": "2008-01-14",
          "@type": "xsd:date"
        }
      ],
      "rdfs:label": ["RFC 3066"],
      "rdfs:comment": ["The set of tags constructed according to RFC 3066 for the identification of languages."],
      "dcterms:description": ["RFC 3066 has been obsoleted by RFC 4646."],
      "rdfs:seeAlso": [{"@id": "http://www.ietf.org/rfc/rfc3066.txt"}],
      "rdf:type": [{"@id": "http://www.w3.org/2000/01/rdf-schema#Datatype"}],
      "dcterms:hasVersion": [{"@id": "http://dublincore.org/usage/terms/history/#RFC3066-002"}]
    },
    {
      "@id": "http://purl.org/dc/terms/RFC4646",
      "rdfs:isDefinedBy": [{"@id": "http://purl.org/dc/terms/"}],
      "dcterms:issued": [
        {
          "@value": "2008-01-14",
          "@type": "xsd:date"
        }
      ],
      "rdfs:label": ["RFC 4646"],
      "rdfs:comment": ["The set of tags constructed according to RFC 4646 for the identification of languages."],
      "dcterms:description": ["RFC 4646 obsoletes RFC 3066."],
      "rdfs:seeAlso": [{"@id": "http://www.ietf.org/rfc/rfc4646.txt"}],
      "rdf:type": [{"@id": "http://www.w3.org/2000/01/rdf-schema#Datatype"}],
      "dcterms:hasVersion": [{"@id": "http://dublincore.org/usage/terms/history/#RFC4646-001"}]
    },
    {
      "@id": "http://purl.org/dc/terms/RFC5646",
      "rdfs:isDefinedBy": [{"@id": "http://purl.org/dc/terms/"}],
      "dcterms:issued": [
        {
          "@value": "2010-10-11",
          "@type": "xsd:date"
        }
      ],
      "rdfs:label": ["RFC 5646"],
      "rdfs:comment": ["The set of tags constructed according to RFC 5646 for the identification of languages."],
      "dcterms:description": ["RFC 5646 obsoletes RFC 4646."],
      "rdfs:seeAlso": [{"@id": "http://www.ietf.org/rfc/rfc5646.txt"}],
      "rdf:type": [{"@id": "http://www.w3.org/2000/01/rdf-schema#Datatype"}],
      "dcterms:hasVersion": [{"@id": "http://dublincore.org/usage/terms/history/#RFC5646-001"}]
    },
    {
      "@id": "http://purl.org/dc/terms/URI",
      "rdfs:isDefinedBy": [{"@id": "http://purl.org/dc/terms/"}],
      "dcterms:issued": [
        {
          "@value": "2000-07-11",
          "@type": "xsd:date"
        }
      ],
      "dcterms:modified": [
        {
          "@value": "2008-01-14",
          "@type": "xsd:date"
        }
      ],
      "rdfs:label": ["URI"],
      "rdfs:comment": ["The set of identifiers constructed according to the generic syntax for Uniform Resource Identifiers as specified by the Internet Engineering Task Force."],
      "rdfs:seeAlso": [{"@id": "http://www.ietf.org/rfc/rfc3986.txt"}],
      "rdf:type": [{"@id": "http://www.w3.org/2000/01/rdf-schema#Datatype"}],
      "dcterms:hasVersion": [{"@id": "http://dublincore.org/usage/terms/history/#URI-003"}]
    },
    {
      "@id": "http://purl.org/dc/terms/W3CDTF",
      "rdfs:isDefinedBy": [{"@id": "http://purl.org/dc/terms/"}],
      "dcterms:issued": [
        {
          "@value": "2000-07-11",
          "@type": "xsd:date"
        }
      ],
      "dcterms:modified": [
        {
          "@value": "2008-01-14",
          "@type": "xsd:date"
        }
      ],
      "rdfs:label": ["W3C-DTF"],
      "rdfs:comment": ["The set of dates and times constructed according to the W3C Date and Time Formats Specification."],
      "rdfs:seeAlso": [{"@id": "http://www.w3.org/TR/NOTE-datetime"}],
      "rdf:type": [{"@id": "http://www.w3.org/2000/01/rdf-schema#Datatype"}],
      "dcterms:hasVersion": [{"@id": "http://dublincore.org/usage/terms/history/#W3CDTF-003"}]
    },
    {
      "@id": "http://purl.org/dc/terms/Agent",
      "rdfs:isDefinedBy": [{"@id": "http://purl.org/dc/terms/"}],
      "dcterms:issued": [
        {
          "@value": "2008-01-14",
          "@type": "xsd:date"
        }
      ],
      "rdfs:label": ["Agent"],
      "rdfs:comment": ["A resource that acts or has the power to act."],
      "dcterms:description": ["Examples of Agent include person, organization, and software agent."],
      "rdf:type": [
        {"@id": "http://www.w3.org/2000/01/rdf-schema#Class"},
        {"@id": "http://purl.org/dc/terms/AgentClass"}
      ],
      "dcterms:hasVersion": [{"@id": "http://dublincore.org/usage/terms/history/#Agent-001"}]
    },
    {
      "@id": "http://purl.org/dc/terms/AgentClass",
      "rdfs:isDefinedBy": [{"@id": "http://purl.org/dc/terms/"}],
      "dcterms:issued": [
        {
          "@value": "2008-01-14",
          "@type": "xsd:date"
        }
      ],
      "dcterms:modified": [
        {
          "@value": "2012-06-14",
          "@type": "xsd:date"
        }
      ],
      "rdfs:label": ["Agent Class"],
      "rdfs:comment": ["A group of agents."],
      "dcterms:description": ["Examples of Agent Class include groups seen as classes, such as students, women, charities, lecturers."],
      "rdf:type": [{"@id": "http://www.w3.org/2000/01/rdf-schema#Class"}],
      "rdfs:subClassOf": [{"@id": "http://www.w3.org/2000/01/rdf-schema#Class"}],
      "dcterms:hasVersion": [{"@id": "http://dublincore.org/usage/terms/history/#AgentClass-003"}]
    },
    {
      "@id": "http://purl.org/dc/terms/BibliographicResource",
      "rdfs:isDefinedBy": [{"@id": "http://purl.org/dc/terms/"}],
      "dcterms:issued": [
        {
          "@value": "2008-01-14",
          "@type": "xsd:date"
        }
      ],
      "rdfs:label": ["Bibliographic Resource"],
      "rdfs:comment": ["A book, article, or other documentary resource."],
      "rdf:type": [{"@id": "http://www.w3.org/2000/01/rdf-schema#Class"}],
      "dcterms:hasVersion": [{"@id": "http://dublincore.org/usage/terms/history/#BibliographicResource-001"}]
    },
    {
      "@id": "http://purl.org/dc/terms/FileFormat",
      "rdfs:isDefinedBy": [{"@id": "http://purl.org/dc/terms/"}],
      "dcterms:issued": [
        {
          "@value": "2008-01-14",
          "@type": "xsd:date"
        }
      ],
      "rdfs:label": ["File Format"],
      "rdfs:comment": ["A digital resource format."],
      "dcterms:description": ["Examples include the formats defined by the list of Internet Media Types."],
      "rdf:type": [{"@id": "http://www.w3.org/2000/01/rdf-schema#Class"}],
      "rdfs:subClassOf": [{"@id": "http://purl.org/dc/terms/MediaType"}],
      "dcterms:hasVersion": [{"@id": "http://dublincore.org/usage/terms/history/#FileFormat-001"}]
    },
    {
      "@id": "http://purl.org/dc/terms/Frequency",
      "rdfs:isDefinedBy": [{"@id": "http://purl.org/dc/terms/"}],
      "dcterms:issued": [
        {
          "@value": "2008-01-14",
          "@type": "xsd:date"
        }
      ],
      "rdfs:label": ["Frequency"],
      "rdfs:comment": ["A rate at which something recurs."],
      "rdf:type": [{"@id": "http://www.w3.org/2000/01/rdf-schema#Class"}],
      "dcterms:hasVersion": [{"@id": "http://dublincore.org/usage/terms/history/#Frequency-001"}]
    },
    {
      "@id": "http://purl.org/dc/terms/Jurisdiction",
      "rdfs:isDefinedBy": [{"@id": "http://purl.org/dc/terms/"}],
      "dcterms:issued": [
        {
          "@value": "2008-01-14",
          "@type": "xsd:date"
        }
      ],
      "rdfs:label": ["Jurisdiction"],
      "rdfs:comment": ["The extent or range of judicial, law enforcement, or other authority."],
      "rdf:type": [{"@id": "http://www.w3.org/2000/01/rdf-schema#Class"}],
      "rdfs:subClassOf": [{"@id": "http://purl.org/dc/terms/LocationPeriodOrJurisdiction"}],
      "dcterms:hasVersion": [{"@id": "http://dublincore.org/usage/terms/history/#Jurisdiction-001"}]
    },
    {
      "@id": "http://purl.org/dc/terms/LicenseDocument",
      "rdfs:isDefinedBy": [{"@id": "http://purl.org/dc/terms/"}],
      "dcterms:issued": [
        {
          "@value": "2008-01-14",
          "@type": "xsd:date"
        }
      ],
      "rdfs:label": ["License Document"],
      "rdfs:comment": ["A legal document giving official permission to do something with a Resource."],
      "rdf:type": [{"@id": "http://www.w3.org/2000/01/rdf-schema#Class"}],
      "rdfs:subClassOf": [{"@id": "http://purl.org/dc/terms/RightsStatement"}],
      "dcterms:hasVersion": [{"@id": "http://dublincore.org/usage/terms/history/#LicenseDocument-001"}]
    },
    {
      "@id": "http://purl.org/dc/terms/LinguisticSystem",
      "rdfs:isDefinedBy": [{"@id": "http://purl.org/dc/terms/"}],
      "dcterms:issued": [
        {
          "@value": "2008-01-14",
          "@type": "xsd:date"
        }
      ],
      "rdfs:label": ["Linguistic System"],
      "dcterms:description": ["Examples include written, spoken, sign, and computer languages."],
      "rdfs:comment": ["A system of signs, symbols, sounds, gestures, or rules used in communication."],
      "rdf:type": [{"@id": "http://www.w3.org/2000/01/rdf-schema#Class"}],
      "dcterms:hasVersion": [{"@id": "http://dublincore.org/usage/terms/history/#LinguisticSystem-001"}]
    },
    {
      "@id": "http://purl.org/dc/terms/Location",
      "rdfs:isDefinedBy": [{"@id": "http://purl.org/dc/terms/"}],
      "dcterms:issued": [
        {
          "@value": "2008-01-14",
          "@type": "xsd:date"
        }
      ],
      "rdfs:label": ["Location"],
      "rdfs:comment": ["A spatial region or named place."],
      "rdf:type": [{"@id": "http://www.w3.org/2000/01/rdf-schema#Class"}],
      "rdfs:subClassOf": [{"@id": "http://purl.org/dc/terms/LocationPeriodOrJurisdiction"}],
      "dcterms:hasVersion": [{"@id": "http://dublincore.org/usage/terms/history/#Location-001"}]
    },
    {
      "@id": "http://purl.org/dc/terms/LocationPeriodOrJurisdiction",
      "rdfs:isDefinedBy": [{"@id": "http://purl.org/dc/terms/"}],
      "dcterms:issued": [
        {
          "@value": "2008-01-14",
          "@type": "xsd:date"
        }
      ],
      "rdfs:label": ["Location, Period, or Jurisdiction"],
      "rdfs:comment": ["A location, period of time, or jurisdiction."],
      "rdf:type": [{"@id": "http://www.w3.org/2000/01/rdf-schema#Class"}],
      "dcterms:hasVersion": [{"@id": "http://dublincore.org/usage/terms/history/#LocationPeriodOrJurisdiction-001"}]
    },
    {
      "@id": "http://purl.org/dc/terms/MediaType",
      "rdfs:isDefinedBy": [{"@id": "http://purl.org/dc/terms/"}],
      "dcterms:issued": [
        {
          "@value": "2008-01-14",
          "@type": "xsd:date"
        }
      ],
      "rdfs:label": ["Media Type"],
      "rdfs:comment": ["A file format or physical medium."],
      "rdf:type": [{"@id": "http://www.w3.org/2000/01/rdf-schema#Class"}],
      "rdfs:subClassOf": [{"@id": "http://purl.org/dc/terms/MediaTypeOrExtent"}],
      "dcterms:hasVersion": [{"@id": "http://dublincore.org/usage/terms/history/#MediaType-001"}]
    },
    {
      "@id": "http://purl.org/dc/terms/MediaTypeOrExtent",
      "rdfs:isDefinedBy": [{"@id": "http://purl.org/dc/terms/"}],
      "dcterms:issued": [
        {
          "@value": "2008-01-14",
          "@type": "xsd:date"
        }
      ],
      "rdfs:label": ["Media Type or Extent"],
      "rdfs:comment": ["A media type or extent."],
      "rdf:type": [{"@id": "http://www.w3.org/2000/01/rdf-schema#Class"}],
      "dcterms:hasVersion": [{"@id": "http://dublincore.org/usage/terms/history/#MediaTypeOrExtent-001"}]
    },
    {
      "@id": "http://purl.org/dc/terms/MethodOfAccrual",
      "rdfs:isDefinedBy": [{"@id": "http://purl.org/dc/terms/"}],
      "dcterms:issued": [
        {
          "@value": "2008-01-14",
          "@type": "xsd:date"
        }
      ],
      "rdfs:label": ["Method of Accrual"],
      "rdfs:comment": ["A method by which resources are added to a collection."],
      "rdf:type": [{"@id": "http://www.w3.org/2000/01/rdf-schema#Class"}],
      "dcterms:hasVersion": [{"@id": "http://dublincore.org/usage/terms/history/#MethodOfAccrual-001"}]
    },
    {
      "@id": "http://purl.org/dc/terms/MethodOfInstruction",
      "rdfs:isDefinedBy": [{"@id": "http://purl.org/dc/terms/"}],
      "dcterms:issued": [
        {
          "@value": "2008-01-14",
          "@type": "xsd:date"
        }
      ],
      "rdfs:label": ["Method of Instruction"],
      "rdfs:comment": ["A process that is used to engender knowledge, attitudes, and skills."],
      "rdf:type": [{"@id": "http://www.w3.org/2000/01/rdf-schema#Class"}],
      "dcterms:hasVersion": [{"@id": "http://dublincore.org/usage/terms/history/#MethodOfInstruction-001"}]
    },
    {
      "@id": "http://purl.org/dc/terms/PeriodOfTime",
      "rdfs:isDefinedBy": [{"@id": "http://purl.org/dc/terms/"}],
      "dcterms:issued": [
        {
          "@value": "2008-01-14",
          "@type": "xsd:date"
        }
      ],
      "rdfs:label": ["Period of Time"],
      "rdfs:comment": ["An interval of time that is named or defined by its start and end dates."],
      "rdf:type": [{"@id": "http://www.w3.org/2000/01/rdf-schema#Class"}],
      "rdfs:subClassOf": [{"@id": "http://purl.org/dc/terms/LocationPeriodOrJurisdiction"}],
      "dcterms:hasVersion": [{"@id": "http://dublincore.org/usage/terms/history/#PeriodOfTime-001"}]
    },
    {
      "@id": "http://purl.org/dc/terms/PhysicalMedium",
      "rdfs:isDefinedBy": [{"@id": "http://purl.org/dc/terms/"}],
      "dcterms:issued": [
        {
          "@value": "2008-01-14",
          "@type": "xsd:date"
        }
      ],
      "rdfs:label": ["Physical Medium"],
      "rdfs:comment": ["A physical material or carrier."],
      "dcterms:description": ["Examples include paper, canvas, or DVD."],
      "rdf:type": [{"@id": "http://www.w3.org/2000/01/rdf-schema#Class"}],
      "rdfs:subClassOf": [{"@id": "http://purl.org/dc/terms/MediaType"}],
      "dcterms:hasVersion": [{"@id": "http://dublincore.org/usage/terms/history/#PhysicalMedium-001"}]
    },
    {
      "@id": "http://purl.org/dc/terms/PhysicalResource",
      "rdfs:isDefinedBy": [{"@id": "http://purl.org/dc/terms/"}],
      "dcterms:issued": [
        {
          "@value": "2008-01-14",
          "@type": "xsd:date"
        }
      ],
      "rdfs:label": ["Physical Resource"],
      "rdfs:comment": ["A material thing."],
      "rdf:type": [{"@id": "http://www.w3.org/2000/01/rdf-schema#Class"}],
      "dcterms:hasVersion": [{"@id": "http://dublincore.org/usage/terms/history/#PhysicalResource-001"}]
    },
    {
      "@id": "http://purl.org/dc/terms/Policy",
      "rdfs:isDefinedBy": [{"@id": "http://purl.org/dc/terms/"}],
      "dcterms:issued": [
        {
          "@value": "2008-01-14",
          "@type": "xsd:date"
        }
      ],
      "rdfs:label": ["Policy"],
      "rdfs:comment": ["A plan or course of action by an authority, intended to influence and determine decisions, actions, and other matters."],
      "rdf:type": [{"@id": "http://www.w3.org/2000/01/rdf-schema#Class"}],
      "dcterms:hasVersion": [{"@id": "http://dublincore.org/usage/terms/history/#Policy-001"}]
    },
    {
      "@id": "http://purl.org/dc/terms/ProvenanceStatement",
      "rdfs:isDefinedBy": [{"@id": "http://purl.org/dc/terms/"}],
      "dcterms:issued": [
        {
          "@value": "2008-01-14",
          "@type": "xsd:date"
        }
      ],
      "rdfs:label": ["Provenance Statement"],
      "rdfs:comment": ["A statement of any changes in ownership and custody of a resource since its creation that are significant for its authenticity, integrity, and interpretation."],
      "rdf:type": [{"@id": "http://www.w3.org/2000/01/rdf-schema#Class"}],
      "dcterms:hasVersion": [{"@id": "http://dublincore.org/usage/terms/history/#ProvenanceStatement-001"}]
    },
    {
      "@id": "http://purl.org/dc/terms/RightsStatement",
      "rdfs:isDefinedBy": [{"@id": "http://purl.org/dc/terms/"}],
      "dcterms:issued": [
        {
          "@value": "2008-01-14",
          "@type": "xsd:date"
        }
      ],
      "rdfs:label": ["Rights Statement"],
      "rdfs:comment": ["A statement about the intellectual property rights (IPR) held in or over a Resource, a legal document giving official permission to do something with a resource, or a statement about access rights."],
      "rdf:type": [{"@id": "http://www.w3.org/2000/01/rdf-schema#Class"}],
      "dcterms:hasVersion": [{"@id": "http://dublincore.org/usage/terms/history/#RightsStatement-001"}]
    },
    {
      "@id": "http://purl.org/dc/terms/SizeOrDuration",
      "rdfs:isDefinedBy": [{"@id": "http://purl.org/dc/terms/"}],
      "dcterms:issued": [
        {
          "@value": "2008-01-14",
          "@type": "xsd:date"
        }
      ],
      "rdfs:label": ["Size or Duration"],
      "rdfs:comment": ["A dimension or extent, or a time taken to play or execute."],
      "dcterms:description": ["Examples include a number of pages, a specification of length, width, and breadth, or a period in hours, minutes, and seconds."],
      "rdf:type": [{"@id": "http://www.w3.org/2000/01/rdf-schema#Class"}],
      "rdfs:subClassOf": [{"@id": "http://purl.org/dc/terms/MediaTypeOrExtent"}],
      "dcterms:hasVersion": [{"@id": "http://dublincore.org/usage/terms/history/#SizeOrDuration-001"}]
    },
    {
      "@id": "http://purl.org/dc/terms/Standard",
      "rdfs:isDefinedBy": [{"@id": "http://purl.org/dc/terms/"}],
      "dcterms:issued": [
        {
          "@value": "2008-01-14",
          "@type": "xsd:date"
        }
      ],
      "rdfs:label": ["Standard"],
      "rdfs:comment": ["A basis for comparison; a reference point against which other things can be evaluated."],
      "rdf:type": [{"@id": "http://www.w3.org/2000/01/rdf-schema#Class"}],
      "dcterms:hasVersion": [{"@id": "http://dublincore.org/usage/terms/history/#Standard-001"}]
    },
    {
      "@id": "http://purl.org/dc/dcmitype/Collection",
      "rdfs:isDefinedBy": [{"@id": "http://purl.org/dc/dcmitype/"}],
      "dcterms:issued": [
        {
          "@value": "2000-07-11",
          "@type": "xsd:date"
        }
      ],
      "dcterms:modified": [
        {
          "@value": "2008-01-14",
          "@type": "xsd:date"
        }
      ],
      "rdfs:label": ["Collection"],
      "rdfs:comment": ["An aggregation of resources."],
      "dcterms:description": ["A collection is described as a group; its parts may also be separately described."],
      "rdf:type": [{"@id": "http://www.w3.org/2000/01/rdf-schema#Class"}],
      "dcam:memberOf": [{"@id": "http://purl.org/dc/terms/DCMIType"}],
      "dcterms:hasVersion": [{"@id": "http://dublincore.org/usage/terms/history/#Collection-003"}]
    },
    {
      "@id": "http://purl.org/dc/dcmitype/Dataset",
      "rdfs:isDefinedBy": [{"@id": "http://purl.org/dc/dcmitype/"}],
      "dcterms:issued": [
        {
          "@value": "2000-07-11",
          "@type": "xsd:date"
        }
      ],
      "dcterms:modified": [
        {
          "@value": "2008-01-14",
          "@type": "xsd:date"
        }
      ],
      "rdfs:label": ["Dataset"],
      "rdfs:comment": ["Data encoded in a defined structure."],
      "dcterms:description": ["Examples include lists, tables, and databases.  A dataset may be useful for direct machine processing."],
      "rdf:type": [{"@id": "http://www.w3.org/2000/01/rdf-schema#Class"}],
      "dcam:memberOf": [{"@id": "http://purl.org/dc/terms/DCMIType"}],
      "dcterms:hasVersion": [{"@id": "http://dublincore.org/usage/terms/history/#Dataset-003"}]
    },
    {
      "@id": "http://purl.org/dc/dcmitype/Event",
      "rdfs:isDefinedBy": [{"@id": "http://purl.org/dc/dcmitype/"}],
      "dcterms:issued": [
        {
          "@value": "2000-07-11",
          "@type": "xsd:date"
        }
      ],
      "dcterms:modified": [
        {
          "@value": "2008-01-14",
          "@type": "xsd:date"
        }
      ],
      "rdfs:label": ["Event"],
      "rdfs:comment": ["A non-persistent, time-based occurrence."],
      "dcterms:description": ["Metadata for an event provides descriptive information that is the basis for discovery of the purpose, location, duration, and responsible agents associated with an event. Examples include an exhibition, webcast, conference, workshop, open day, performance, battle, trial, wedding, tea party, conflagration."],
      "rdf:type": [{"@id": "http://www.w3.org/2000/01/rdf-schema#Class"}],
      "dcam:memberOf": [{"@id": "http://purl.org/dc/terms/DCMIType"}],
      "dcterms:hasVersion": [{"@id": "http://dublincore.org/usage/terms/history/#Event-003"}]
    },
    {
      "@id": "http://purl.org/dc/dcmitype/Image",
      "rdfs:isDefinedBy": [{"@id": "http://purl.org/dc/dcmitype/"}],
      "dcterms:issued": [
        {
          "@value": "2000-07-11",
          "@type": "xsd:date"
        }
      ],
      "dcterms:modified": [
        {
          "@value": "2008-01-14",
          "@type": "xsd:date"
        }
      ],
      "rdfs:label": ["Image"],
      "rdfs:comment": ["A visual representation other than text."],
      "dcterms:description": ["Examples include images and photographs of physical objects, paintings, prints, drawings, other images and graphics, animations and moving pictures, film, diagrams, maps, musical notation.  Note that Image may include both electronic and physical representations."],
      "rdf:type": [{"@id": "http://www.w3.org/2000/01/rdf-schema#Class"}],
      "dcam:memberOf": [{"@id": "http://purl.org/dc/terms/DCMIType"}],
      "dcterms:hasVersion": [{"@id": "http://dublincore.org/usage/terms/history/#Image-004"}]
    },
    {
      "@id": "http://purl.org/dc/dcmitype/InteractiveResource",
      "rdfs:isDefinedBy": [{"@id": "http://purl.org/dc/dcmitype/"}],
      "dcterms:issued": [
        {
          "@value": "2000-07-11",
          "@type": "xsd:date"
        }
      ],
      "dcterms:modified": [
        {
          "@value": "2008-01-14",
          "@type": "xsd:date"
        }
      ],
      "rdfs:label": ["Interactive Resource"],
      "rdfs:comment": ["A resource requiring interaction from the user to be understood, executed, or experienced."],
      "dcterms:description": ["Examples include forms on Web pages, applets, multimedia learning objects, chat services, or virtual reality environments."],
      "rdf:type": [{"@id": "http://www.w3.org/2000/01/rdf-schema#Class"}],
      "dcam:memberOf": [{"@id": "http://purl.org/dc/terms/DCMIType"}],
      "dcterms:hasVersion": [{"@id": "http://dublincore.org/usage/terms/history/#InteractiveResource-003"}]
    },
    {
      "@id": "http://purl.org/dc/dcmitype/MovingImage",
      "rdfs:isDefinedBy": [{"@id": "http://purl.org/dc/dcmitype/"}],
      "dcterms:issued": [
        {
          "@value": "2003-11-18",
          "@type": "xsd:date"
        }
      ],
      "dcterms:modified": [
        {
          "@value": "2008-01-14",
          "@type": "xsd:date"
        }
      ],
      "rdfs:label": ["Moving Image"],
      "rdfs:comment": ["A series of visual representations imparting an impression of motion when shown in succession."],
      "dcterms:description": ["Examples include animations, movies, television programs, videos, zoetropes, or visual output from a simulation.  Instances of the type Moving Image must also be describable as instances of the broader type Image."],
      "rdf:type": [{"@id": "http://www.w3.org/2000/01/rdf-schema#Class"}],
      "rdfs:subClassOf": [{"@id": "http://purl.org/dc/dcmitype/Image"}],
      "dcam:memberOf": [{"@id": "http://purl.org/dc/terms/DCMIType"}],
      "dcterms:hasVersion": [{"@id": "http://dublincore.org/usage/terms/history/#MovingImage-003"}]
    },
    {
      "@id": "http://purl.org/dc/dcmitype/PhysicalObject",
      "rdfs:isDefinedBy": [{"@id": "http://purl.org/dc/dcmitype/"}],
      "dcterms:issued": [
        {
          "@value": "2002-07-13",
          "@type": "xsd:date"
        }
      ],
      "dcterms:modified": [
        {
          "@value": "2008-01-14",
          "@type": "xsd:date"
        }
      ],
      "rdfs:label": ["Physical Object"],
      "rdfs:comment": ["An inanimate, three-dimensional object or substance."],
      "dcterms:description": ["Note that digital representations of, or surrogates for, these objects should use Image, Text or one of the other types."],
      "rdf:type": [{"@id": "http://www.w3.org/2000/01/rdf-schema#Class"}],
      "dcam:memberOf": [{"@id": "http://purl.org/dc/terms/DCMIType"}],
      "dcterms:hasVersion": [{"@id": "http://dublincore.org/usage/terms/history/#PhysicalObject-003"}]
    },
    {
      "@id": "http://purl.org/dc/dcmitype/Service",
      "rdfs:isDefinedBy": [{"@id": "http://purl.org/dc/dcmitype/"}],
      "dcterms:issued": [
        {
          "@value": "2000-07-11",
          "@type": "xsd:date"
        }
      ],
      "dcterms:modified": [
        {
          "@value": "2008-01-14",
          "@type": "xsd:date"
        }
      ],
      "rdfs:label": ["Service"],
      "rdfs:comment": ["A system that provides one or more functions."],
      "dcterms:description": ["Examples include a photocopying service, a banking service, an authentication service, interlibrary loans, a Z39.50 or Web server."],
      "rdf:type": [{"@id": "http://www.w3.org/2000/01/rdf-schema#Class"}],
      "dcam:memberOf": [{"@id": "http://purl.org/dc/terms/DCMIType"}],
      "dcterms:hasVersion": [{"@id": "http://dublincore.org/usage/terms/history/#Service-003"}]
    },
    {
      "@id": "http://purl.org/dc/dcmitype/Software",
      "rdfs:isDefinedBy": [{"@id": "http://purl.org/dc/dcmitype/"}],
      "dcterms:issued": [
        {
          "@value": "2000-07-11",
          "@type": "xsd:date"
        }
      ],
      "dcterms:modified": [
        {
          "@value": "2008-01-14",
          "@type": "xsd:date"
        }
      ],
      "rdfs:label": ["Software"],
      "rdfs:comment": ["A computer program in source or compiled form."],
      "dcterms:description": ["Examples include a C source file, MS-Windows .exe executable, or Perl script."],
      "rdf:type": [{"@id": "http://www.w3.org/2000/01/rdf-schema#Class"}],
      "dcam:memberOf": [{"@id": "http://purl.org/dc/terms/DCMIType"}],
      "dcterms:hasVersion": [{"@id": "http://dublincore.org/usage/terms/history/#Software-003"}]
    },
    {
      "@id": "http://purl.org/dc/dcmitype/Sound",
      "rdfs:isDefinedBy": [{"@id": "http://purl.org/dc/dcmitype/"}],
      "dcterms:issued": [
        {
          "@value": "2000-07-11",
          "@type": "xsd:date"
        }
      ],
      "dcterms:modified": [
        {
          "@value": "2008-01-14",
          "@type": "xsd:date"
        }
      ],
      "rdfs:label": ["Sound"],
      "rdfs:comment": ["A resource primarily intended to be heard."],
      "dcterms:description": ["Examples include a music playback file format, an audio compact disc, and recorded speech or sounds."],
      "rdf:type": [{"@id": "http://www.w3.org/2000/01/rdf-schema#Class"}],
      "dcam:memberOf": [{"@id": "http://purl.org/dc/terms/DCMIType"}],
      "dcterms:hasVersion": [{"@id": "http://dublincore.org/usage/terms/history/#Sound-003"}]
    },
    {
      "@id": "http://purl.org/dc/dcmitype/StillImage",
      "rdfs:isDefinedBy": [{"@id": "http://purl.org/dc/dcmitype/"}],
      "dcterms:issued": [
        {
          "@value": "2003-11-18",
          "@type": "xsd:date"
        }
      ],
      "dcterms:modified": [
        {
          "@value": "2008-01-14",
          "@type": "xsd:date"
        }
      ],
      "rdfs:label": ["Still Image"],
      "rdfs:comment": ["A static visual representation."],
      "dcterms:description": ["Examples include paintings, drawings, graphic designs, plans and maps. Recommended best practice is to assign the type Text to images of textual materials. Instances of the type Still Image must also be describable as instances of the broader type Image."],
      "rdf:type": [{"@id": "http://www.w3.org/2000/01/rdf-schema#Class"}],
      "rdfs:subClassOf": [{"@id": "http://purl.org/dc/dcmitype/Image"}],
      "dcam:memberOf": [{"@id": "http://purl.org/dc/terms/DCMIType"}],
      "dcterms:hasVersion": [{"@id": "http://dublincore.org/usage/terms/history/#StillImage-003"}]
    },
    {
      "@id": "http://purl.org/dc/dcmitype/Text",
      "rdfs:isDefinedBy": [{"@id": "http://purl.org/dc/dcmitype/"}],
      "dcterms:issued": [
        {
          "@value": "2000-07-11",
          "@type": "xsd:date"
        }
      ],
      "dcterms:modified": [
        {
          "@value": "2008-01-14",
          "@type": "xsd:date"
        }
      ],
      "rdfs:label": ["Text"],
      "rdfs:comment": ["A resource consisting primarily of words for reading."],
      "dcterms:description": ["Examples include books, letters, dissertations, poems, newspapers, articles, archives of mailing lists. Note that facsimiles or images of texts are still of the genre Text."],
      "rdf:type": [{"@id": "http://www.w3.org/2000/01/rdf-schema#Class"}],
      "dcam:memberOf": [{"@id": "http://purl.org/dc/terms/DCMIType"}],
      "dcterms:hasVersion": [{"@id": "http://dublincore.org/usage/terms/history/#Text-003"}]
    },
    {
      "@id": "http://purl.org/dc/dcam/memberOf",
      "rdfs:isDefinedBy": [{"@id": "http://purl.org/dc/dcam/"}],
      "dcterms:issued": [
        {
          "@value": "2008-01-14",
          "@type": "xsd:date"
        }
      ],
      "dcterms:modified": [
        {
          "@value": "2010-10-11",
          "@type": "xsd:date"
        }
      ],
      "rdfs:label": ["Member Of"],
      "rdfs:comment": ["A relationship between a resource and a vocabulary encoding scheme which indicates that the resource is a member of a set."],
      "rdfs:seeAlso": [{"@id": "http://dublincore.org/documents/2007/06/04/abstract-model/"}],
      "rdf:type": [{"@id": "http://www.w3.org/1999/02/22-rdf-syntax-ns#Property"}],
      "rdfs:range": [{"@id": "http://purl.org/dc/dcam/VocabularyEncodingScheme"}],
      "dcterms:hasVersion": [{"@id": "http://dublincore.org/usage/terms/history/#memberOf-002"}]
    },
    {
      "@id": "http://purl.org/dc/dcam/VocabularyEncodingScheme",
      "rdfs:isDefinedBy": [{"@id": "http://purl.org/dc/dcam/"}],
      "dcterms:issued": [
        {
          "@value": "2008-01-14",
          "@type": "xsd:date"
        }
      ],
      "rdfs:label": ["Vocabulary Encoding Scheme"],
      "rdfs:comment": ["An enumerated set of resources."],
      "rdfs:seeAlso": [{"@id": "http://dublincore.org/documents/2007/06/04/abstract-model/"}],
      "rdf:type": [{"@id": "http://www.w3.org/2000/01/rdf-schema#Class"}],
      "dcterms:hasVersion": [{"@id": "http://dublincore.org/usage/terms/history/#VocabularyEncodingScheme-001"}]
    },
    {"@id": "http://validator.w3.org/check/referer"},
    {"@id": "http://jigsaw.w3.org/css-validator/check/referer"}
  ]
}