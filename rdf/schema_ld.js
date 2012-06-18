{
  "@context": {},
  "@graph": [
    {"@id": "http://www.schema.org/docs/schema_org_rdfa.html"},
    {
      "@id": "http://schema.org/Thing",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["Thing"],
      "rdfs:comment": ["The most generic type of item."]
    },
    {
      "@id": "http://schema.org/CreativeWork",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["CreativeWork"],
      "rdfs:comment": ["The most generic kind of creative work, including books, movies, photographs, software programs, etc."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/Thing"}],
      "dc:source": [{"@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_rNews"}]
    },
    {
      "@id": "http://schema.org/WebPage",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["WebPage"],
      "rdfs:comment": ["A web page. Every web page is implicitly assumed to be declared to be of type WebPage, so the various properties about that webpage, such as breadcrumb may be used. We recommend explicit declaration if these properties are specified, but if they are found outside of an itemscope, they will be assumed to be about the page"],
      "rdfs:subClassOf": [{"@id": "http://schema.org/CreativeWork"}]
    },
    {
      "@id": "http://schema.org/AboutPage",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["AboutPage"],
      "rdfs:comment": ["Web page type: About page."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/WebPage"}]
    },
    {
      "@id": "http://schema.org/Organization",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["Organization"],
      "rdfs:comment": ["An organization such as a school, NGO, corporation, club, etc."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/Thing"}]
    },
    {
      "@id": "http://schema.org/Place",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["Place"],
      "rdfs:comment": ["Entities that have a somewhat fixed, physical extension."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/Thing"}]
    },
    {
      "@id": "http://schema.org/LocalBusiness",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["LocalBusiness"],
      "rdfs:comment": ["A particular physical business or branch of an organization. Examples of LocalBusiness include a restaurant, a particular branch of a restaurant chain, a branch of a bank, a medical practice, a club, a bowling alley, etc."],
      "rdfs:subClassOf": [
        {"@id": "http://schema.org/Organization"},
        {"@id": "http://schema.org/Place"}
      ]
    },
    {
      "@id": "http://schema.org/FinancialService",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["FinancialService"],
      "rdfs:comment": ["Financial services business."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/LocalBusiness"}]
    },
    {
      "@id": "http://schema.org/ProfessionalService",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["ProfessionalService"],
      "rdfs:comment": ["Provider of professional services."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/LocalBusiness"}]
    },
    {
      "@id": "http://schema.org/AccountingService",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["AccountingService"],
      "rdfs:comment": ["Accountancy business."],
      "rdfs:subClassOf": [
        {"@id": "http://schema.org/FinancialService"},
        {"@id": "http://schema.org/ProfessionalService"}
      ]
    },
    {
      "@id": "http://schema.org/AdministrativeArea",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["AdministrativeArea"],
      "rdfs:comment": ["A geographical region under the jurisdiction of a particular government."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/Place"}]
    },
    {
      "@id": "http://schema.org/EntertainmentBusiness",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["EntertainmentBusiness"],
      "rdfs:comment": ["A business providing entertainment."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/LocalBusiness"}]
    },
    {
      "@id": "http://schema.org/AdultEntertainment",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["AdultEntertainment"],
      "rdfs:comment": ["An adult entertainment establishment."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/EntertainmentBusiness"}]
    },
    {
      "@id": "http://schema.org/Intangible",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["Intangible"],
      "rdfs:comment": ["A utility class that serves as the umbrella for a number of 'intangible' things such as quantities, structured values, etc."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/Thing"}]
    },
    {
      "@id": "http://schema.org/Offer",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["Offer"],
      "rdfs:comment": ["An offer to sell an item—for example, an offer to sell a product, the DVD of a movie, or tickets to an event."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/Intangible"}]
    },
    {
      "@id": "http://schema.org/AggregateOffer",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["AggregateOffer"],
      "rdfs:comment": ["When a single product that has different offers (for example, the same pair of shoes is offered by different merchants), then AggregateOffer can be used."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/Offer"}]
    },
    {
      "@id": "http://schema.org/Rating",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["Rating"],
      "rdfs:comment": ["The rating of the video."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/Intangible"}]
    },
    {
      "@id": "http://schema.org/AggregateRating",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["AggregateRating"],
      "rdfs:comment": ["The average rating based on multiple ratings or reviews."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/Rating"}]
    },
    {
      "@id": "http://schema.org/CivicStructure",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["CivicStructure"],
      "rdfs:comment": ["A public structure, such as a town hall or concert hall."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/Place"}]
    },
    {
      "@id": "http://schema.org/Airport",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["Airport"],
      "rdfs:comment": ["An airport."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/CivicStructure"}]
    },
    {
      "@id": "http://schema.org/AmusementPark",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["AmusementPark"],
      "rdfs:comment": ["An amusement park."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/EntertainmentBusiness"}]
    },
    {
      "@id": "http://schema.org/AnimalShelter",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["AnimalShelter"],
      "rdfs:comment": ["Animal shelter."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/LocalBusiness"}]
    },
    {
      "@id": "http://schema.org/Residence",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["Residence"],
      "rdfs:comment": ["The place where a person lives."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/Place"}]
    },
    {
      "@id": "http://schema.org/ApartmentComplex",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["ApartmentComplex"],
      "rdfs:comment": ["Residence type: Apartment complex."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/Residence"}]
    },
    {
      "@id": "http://schema.org/Aquarium",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["Aquarium"],
      "rdfs:comment": ["Aquarium."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/CivicStructure"}]
    },
    {
      "@id": "http://schema.org/ArtGallery",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["ArtGallery"],
      "rdfs:comment": ["An art gallery."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/EntertainmentBusiness"}]
    },
    {
      "@id": "http://schema.org/Article",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["Article"],
      "rdfs:comment": ["An article, such as a news article or piece of investigative report. Newspapers and magazines have articles of many different types and this is intended to cover them all."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/CreativeWork"}],
      "dc:source": [{"@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_rNews"}]
    },
    {
      "@id": "http://schema.org/Attorney",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["Attorney"],
      "rdfs:comment": ["Professional service: Attorney."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/ProfessionalService"}]
    },
    {
      "@id": "http://schema.org/MediaObject",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["MediaObject"],
      "rdfs:comment": ["An image, video, or audio object embedded in a web page. Note that a creative work may have many media objects associated with it on the same web page. For example, a page about a single song (MusicRecording) may have a music video (VideoObject), and a high and low bandwidth audio stream (2 AudioObject's)."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/CreativeWork"}]
    },
    {
      "@id": "http://schema.org/AudioObject",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["AudioObject"],
      "rdfs:comment": ["An audio file."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/MediaObject"}],
      "dc:source": [{"@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_rNews"}]
    },
    {
      "@id": "http://schema.org/AutomotiveBusiness",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["AutomotiveBusiness"],
      "rdfs:comment": ["Car repair, sales, or parts."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/LocalBusiness"}]
    },
    {
      "@id": "http://schema.org/AutoBodyShop",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["AutoBodyShop"],
      "rdfs:comment": ["Auto body shop."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/AutomotiveBusiness"}]
    },
    {
      "@id": "http://schema.org/AutoDealer",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["AutoDealer"],
      "rdfs:comment": ["An car dealership."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/AutomotiveBusiness"}]
    },
    {
      "@id": "http://schema.org/Store",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["Store"],
      "rdfs:comment": ["A retail good store."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/LocalBusiness"}]
    },
    {
      "@id": "http://schema.org/AutoPartsStore",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["AutoPartsStore"],
      "rdfs:comment": ["An auto parts store."],
      "rdfs:subClassOf": [
        {"@id": "http://schema.org/Store"},
        {"@id": "http://schema.org/AutomotiveBusiness"}
      ]
    },
    {
      "@id": "http://schema.org/AutoRental",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["AutoRental"],
      "rdfs:comment": ["A car rental business."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/AutomotiveBusiness"}]
    },
    {
      "@id": "http://schema.org/AutoRepair",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["AutoRepair"],
      "rdfs:comment": ["Car repair business."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/AutomotiveBusiness"}]
    },
    {
      "@id": "http://schema.org/AutoWash",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["AutoWash"],
      "rdfs:comment": ["A car wash business."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/AutomotiveBusiness"}]
    },
    {
      "@id": "http://schema.org/AutomatedTeller",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["AutomatedTeller"],
      "rdfs:comment": ["ATM/cash machine."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/FinancialService"}]
    },
    {
      "@id": "http://schema.org/FoodEstablishment",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["FoodEstablishment"],
      "rdfs:comment": ["A food-related business."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/LocalBusiness"}]
    },
    {
      "@id": "http://schema.org/Bakery",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["Bakery"],
      "rdfs:comment": ["A bakery."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/FoodEstablishment"}]
    },
    {
      "@id": "http://schema.org/BankOrCreditUnion",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["BankOrCreditUnion"],
      "rdfs:comment": ["Bank or credit union."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/FinancialService"}]
    },
    {
      "@id": "http://schema.org/BarOrPub",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["BarOrPub"],
      "rdfs:comment": ["A bar or pub."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/FoodEstablishment"}]
    },
    {
      "@id": "http://schema.org/Beach",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["Beach"],
      "rdfs:comment": ["Beach."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/CivicStructure"}]
    },
    {
      "@id": "http://schema.org/HealthAndBeautyBusiness",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["HealthAndBeautyBusiness"],
      "rdfs:comment": ["Health and beauty."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/LocalBusiness"}]
    },
    {
      "@id": "http://schema.org/BeautySalon",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["BeautySalon"],
      "rdfs:comment": ["Beauty salon."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/HealthAndBeautyBusiness"}]
    },
    {
      "@id": "http://schema.org/LodgingBusiness",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["LodgingBusiness"],
      "rdfs:comment": ["A lodging business, such as a motel, hotel, or inn."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/LocalBusiness"}]
    },
    {
      "@id": "http://schema.org/BedAndBreakfast",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["BedAndBreakfast"],
      "rdfs:comment": ["Bed and breakfast."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/LodgingBusiness"}]
    },
    {
      "@id": "http://schema.org/BikeStore",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["BikeStore"],
      "rdfs:comment": ["A bike store."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/Store"}]
    },
    {
      "@id": "http://schema.org/Blog",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["Blog"],
      "rdfs:comment": ["A blog"],
      "rdfs:subClassOf": [{"@id": "http://schema.org/CreativeWork"}]
    },
    {
      "@id": "http://schema.org/BlogPosting",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["BlogPosting"],
      "rdfs:comment": ["A blog post."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/Article"}]
    },
    {
      "@id": "http://schema.org/Landform",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["Landform"],
      "rdfs:comment": ["A landform or physical feature.  Landform elements include mountains, plains, lakes, rivers, seascape and oceanic waterbody interface features such as bays, peninsulas, seas and so forth, including sub-aqueous terrain features such as submersed mountain ranges, volcanoes, and the great ocean basins."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/Place"}]
    },
    {
      "@id": "http://schema.org/BodyOfWater",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["BodyOfWater"],
      "rdfs:comment": ["A body of water, such as a sea, ocean, or lake."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/Landform"}]
    },
    {
      "@id": "http://schema.org/Book",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["Book"],
      "rdfs:comment": ["A book."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/CreativeWork"}]
    },
    {
      "@id": "http://schema.org/Enumeration",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["Enumeration"],
      "rdfs:comment": ["Lists or enumerations—for example, a list of cuisines or music genres, etc."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/Intangible"}]
    },
    {
      "@id": "http://schema.org/BookFormatType",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["BookFormatType"],
      "rdfs:comment": ["The publication format of the book."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/Enumeration"}]
    },
    {
      "@id": "http://schema.org/BookStore",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["BookStore"],
      "rdfs:comment": ["A bookstore."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/Store"}]
    },
    {
      "@id": "http://schema.org/DataType",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["DataType"],
      "rdfs:comment": ["The basic data types such as Integers, Strings, etc."]
    },
    {
      "@id": "http://schema.org/Boolean",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["Boolean"],
      "rdfs:comment": ["Boolean: True or False."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/DataType"}]
    },
    {
      "@id": "http://schema.org/SportsActivityLocation",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["SportsActivityLocation"],
      "rdfs:comment": ["A sports location, such as a playing field."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/LocalBusiness"}]
    },
    {
      "@id": "http://schema.org/BowlingAlley",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["BowlingAlley"],
      "rdfs:comment": ["A bowling alley."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/SportsActivityLocation"}]
    },
    {
      "@id": "http://schema.org/Brewery",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["Brewery"],
      "rdfs:comment": ["Brewery."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/FoodEstablishment"}]
    },
    {
      "@id": "http://schema.org/PlaceOfWorship",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["PlaceOfWorship"],
      "rdfs:comment": ["Place of worship, such as a church, synagogue, or mosque."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/CivicStructure"}]
    },
    {
      "@id": "http://schema.org/BuddhistTemple",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["BuddhistTemple"],
      "rdfs:comment": ["A Buddhist temple."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/PlaceOfWorship"}]
    },
    {
      "@id": "http://schema.org/BusStation",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["BusStation"],
      "rdfs:comment": ["A bus station."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/CivicStructure"}]
    },
    {
      "@id": "http://schema.org/BusStop",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["BusStop"],
      "rdfs:comment": ["A bus stop."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/CivicStructure"}]
    },
    {
      "@id": "http://schema.org/Event",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["Event"],
      "rdfs:comment": ["An event happening at a certain time at a certain location."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/Thing"}]
    },
    {
      "@id": "http://schema.org/BusinessEvent",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["BusinessEvent"],
      "rdfs:comment": ["Event type: Business event."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/Event"}]
    },
    {
      "@id": "http://schema.org/CafeOrCoffeeShop",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["CafeOrCoffeeShop"],
      "rdfs:comment": ["A cafe or coffee shop."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/FoodEstablishment"}]
    },
    {
      "@id": "http://schema.org/Campground",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["Campground"],
      "rdfs:comment": ["A campground."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/CivicStructure"}]
    },
    {
      "@id": "http://schema.org/Canal",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["Canal"],
      "rdfs:comment": ["A canal, like the Panama Canal"],
      "rdfs:subClassOf": [{"@id": "http://schema.org/BodyOfWater"}]
    },
    {
      "@id": "http://schema.org/Casino",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["Casino"],
      "rdfs:comment": ["A casino."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/EntertainmentBusiness"}]
    },
    {
      "@id": "http://schema.org/CatholicChurch",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["CatholicChurch"],
      "rdfs:comment": ["A Catholic church."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/PlaceOfWorship"}]
    },
    {
      "@id": "http://schema.org/Cemetery",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["Cemetery"],
      "rdfs:comment": ["A graveyard."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/CivicStructure"}]
    },
    {
      "@id": "http://schema.org/CheckoutPage",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["CheckoutPage"],
      "rdfs:comment": ["Web page type: Checkout page."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/WebPage"}]
    },
    {
      "@id": "http://schema.org/ChildCare",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["ChildCare"],
      "rdfs:comment": ["A Childcare center."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/LocalBusiness"}]
    },
    {
      "@id": "http://schema.org/ChildrensEvent",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["ChildrensEvent"],
      "rdfs:comment": ["Event type: Children's event."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/Event"}]
    },
    {
      "@id": "http://schema.org/Church",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["Church"],
      "rdfs:comment": ["A church."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/PlaceOfWorship"}]
    },
    {
      "@id": "http://schema.org/City",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["City"],
      "rdfs:comment": ["A city or town."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/AdministrativeArea"}]
    },
    {
      "@id": "http://schema.org/GovernmentBuilding",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["GovernmentBuilding"],
      "rdfs:comment": ["A government building."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/CivicStructure"}]
    },
    {
      "@id": "http://schema.org/CityHall",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["CityHall"],
      "rdfs:comment": ["A city hall."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/GovernmentBuilding"}]
    },
    {
      "@id": "http://schema.org/ClothingStore",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["ClothingStore"],
      "rdfs:comment": ["A clothing store."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/Store"}]
    },
    {
      "@id": "http://schema.org/CollectionPage",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["CollectionPage"],
      "rdfs:comment": ["Web page type: Collection page."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/WebPage"}]
    },
    {
      "@id": "http://schema.org/EducationalOrganization",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["EducationalOrganization"],
      "rdfs:comment": ["An educational organization."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/Organization"}]
    },
    {
      "@id": "http://schema.org/CollegeOrUniversity",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["CollegeOrUniversity"],
      "rdfs:comment": ["A college, university, or other third-level educational institution."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/EducationalOrganization"}]
    },
    {
      "@id": "http://schema.org/ComedyClub",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["ComedyClub"],
      "rdfs:comment": ["A comedy club."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/EntertainmentBusiness"}]
    },
    {
      "@id": "http://schema.org/ComedyEvent",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["ComedyEvent"],
      "rdfs:comment": ["Event type: Comedy event."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/Event"}]
    },
    {
      "@id": "http://schema.org/Comment",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["Comment"],
      "rdfs:comment": ["A comment on an item - for example, a comment on a blog post. The comment's content is expressed via the \"text\" property, and its topic via \"about\", properties shared with all CreativeWorks."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/CreativeWork"}]
    },
    {
      "@id": "http://schema.org/ComputerStore",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["ComputerStore"],
      "rdfs:comment": ["A computer store."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/Store"}]
    },
    {
      "@id": "http://schema.org/ContactPage",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["ContactPage"],
      "rdfs:comment": ["Web page type: Contact page."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/WebPage"}]
    },
    {
      "@id": "http://schema.org/StructuredValue",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["StructuredValue"],
      "rdfs:comment": ["Structured values are strings—for example, addresses—that have certain constraints on their structure."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/Intangible"}]
    },
    {
      "@id": "http://schema.org/ContactPoint",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["ContactPoint"],
      "rdfs:comment": ["A contact point—for example, a Customer Complaints department."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/StructuredValue"}]
    },
    {
      "@id": "http://schema.org/Continent",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["Continent"],
      "rdfs:comment": ["One of the continents (for example, Europe or Africa)."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/Landform"}]
    },
    {
      "@id": "http://schema.org/ConvenienceStore",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["ConvenienceStore"],
      "rdfs:comment": ["A convenience store."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/Store"}]
    },
    {
      "@id": "http://schema.org/Corporation",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["Corporation"],
      "rdfs:comment": ["Organization: A business corporation."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/Organization"}],
      "dc:source": [{"@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_rNews"}]
    },
    {
      "@id": "http://schema.org/Country",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["Country"],
      "rdfs:comment": ["A country."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/AdministrativeArea"}]
    },
    {
      "@id": "http://schema.org/Courthouse",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["Courthouse"],
      "rdfs:comment": ["A courthouse."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/GovernmentBuilding"}]
    },
    {
      "@id": "http://schema.org/Crematorium",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["Crematorium"],
      "rdfs:comment": ["A crematorium."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/CivicStructure"}]
    },
    {
      "@id": "http://schema.org/DanceEvent",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["DanceEvent"],
      "rdfs:comment": ["Event type: A social dance."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/Event"}]
    },
    {
      "@id": "http://schema.org/PerformingGroup",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["PerformingGroup"],
      "rdfs:comment": ["A performance group, such as a band, an orchestra, or a circus."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/Organization"}]
    },
    {
      "@id": "http://schema.org/DanceGroup",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["DanceGroup"],
      "rdfs:comment": ["A dance group—for example, the Alvin Ailey Dance Theater or Riverdance."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/PerformingGroup"}]
    },
    {
      "@id": "http://schema.org/Date",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["Date"],
      "rdfs:comment": ["A date value in ISO 8601 date format."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/DataType"}]
    },
    {
      "@id": "http://schema.org/DaySpa",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["DaySpa"],
      "rdfs:comment": ["A day spa."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/HealthAndBeautyBusiness"}]
    },
    {
      "@id": "http://schema.org/DefenceEstablishment",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["DefenceEstablishment"],
      "rdfs:comment": ["A defence establishment, such as an army or navy base."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/GovernmentBuilding"}]
    },
    {
      "@id": "http://schema.org/MedicalOrganization",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["MedicalOrganization"],
      "rdfs:comment": ["A medical organization, such as a doctor's office or clinic."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/LocalBusiness"}]
    },
    {
      "@id": "http://schema.org/Dentist",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["Dentist"],
      "rdfs:comment": ["A dentist."],
      "rdfs:subClassOf": [
        {"@id": "http://schema.org/MedicalOrganization"},
        {"@id": "http://schema.org/ProfessionalService"}
      ]
    },
    {
      "@id": "http://schema.org/DepartmentStore",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["DepartmentStore"],
      "rdfs:comment": ["A department store."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/Store"}]
    },
    {
      "@id": "http://schema.org/Quantity",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["Quantity"],
      "rdfs:comment": ["Quantities such as distance, time, mass, weight, etc. Particular instances of say Mass are entities like '3 Kg' or '4 milligrams'."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/Intangible"}]
    },
    {
      "@id": "http://schema.org/Distance",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["Distance"],
      "rdfs:comment": ["Properties that take Distances as values are of the form '<Number> <Length unit of measure>'. E.g., '7 ft'"],
      "rdfs:subClassOf": [{"@id": "http://schema.org/Quantity"}]
    },
    {
      "@id": "http://schema.org/DryCleaningOrLaundry",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["DryCleaningOrLaundry"],
      "rdfs:comment": ["A dry-cleaning business."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/LocalBusiness"}]
    },
    {
      "@id": "http://schema.org/Duration",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["Duration"],
      "rdfs:comment": ["Quantity: Duration (use  ISO 8601 duration format)."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/Quantity"}]
    },
    {
      "@id": "http://schema.org/EducationEvent",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["EducationEvent"],
      "rdfs:comment": ["Event type: Education event."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/Event"}]
    },
    {
      "@id": "http://schema.org/HomeAndConstructionBusiness",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["HomeAndConstructionBusiness"],
      "rdfs:comment": ["A construction business."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/LocalBusiness"}]
    },
    {
      "@id": "http://schema.org/Electrician",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["Electrician"],
      "rdfs:comment": ["An electrician."],
      "rdfs:subClassOf": [
        {"@id": "http://schema.org/HomeAndConstructionBusiness"},
        {"@id": "http://schema.org/ProfessionalService"}
      ]
    },
    {
      "@id": "http://schema.org/ElectronicsStore",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["ElectronicsStore"],
      "rdfs:comment": ["An electronics store."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/Store"}]
    },
    {
      "@id": "http://schema.org/ElementarySchool",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["ElementarySchool"],
      "rdfs:comment": ["An elementary school."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/EducationalOrganization"}]
    },
    {
      "@id": "http://schema.org/Embassy",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["Embassy"],
      "rdfs:comment": ["An embassy."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/GovernmentBuilding"}]
    },
    {
      "@id": "http://schema.org/EmergencyService",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["EmergencyService"],
      "rdfs:comment": ["An emergency service, such as a fire station or ER."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/LocalBusiness"}]
    },
    {
      "@id": "http://schema.org/EmploymentAgency",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["EmploymentAgency"],
      "rdfs:comment": ["An employment agency."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/LocalBusiness"}]
    },
    {
      "@id": "http://schema.org/Energy",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["Energy"],
      "rdfs:comment": ["Properties that take Enerygy as values are of the form '<Number> <Energy unit of measure>'"],
      "rdfs:subClassOf": [{"@id": "http://schema.org/Quantity"}]
    },
    {
      "@id": "http://schema.org/EventVenue",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["EventVenue"],
      "rdfs:comment": ["An event venue."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/CivicStructure"}]
    },
    {
      "@id": "http://schema.org/ExerciseGym",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["ExerciseGym"],
      "rdfs:comment": ["A gym."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/SportsActivityLocation"}]
    },
    {
      "@id": "http://schema.org/FastFoodRestaurant",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["FastFoodRestaurant"],
      "rdfs:comment": ["A fast-food restaurant."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/FoodEstablishment"}]
    },
    {
      "@id": "http://schema.org/Festival",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["Festival"],
      "rdfs:comment": ["Event type: Festival."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/Event"}]
    },
    {
      "@id": "http://schema.org/FireStation",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["FireStation"],
      "rdfs:comment": ["A fire station. With firemen."],
      "rdfs:subClassOf": [
        {"@id": "http://schema.org/CivicStructure"},
        {"@id": "http://schema.org/EmergencyService"}
      ]
    },
    {
      "@id": "http://schema.org/Number",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["Number"],
      "rdfs:comment": ["Data type: Number."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/DataType"}]
    },
    {
      "@id": "http://schema.org/Float",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["Float"],
      "rdfs:comment": ["Data type: Floating number."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/Number"}]
    },
    {
      "@id": "http://schema.org/Florist",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["Florist"],
      "rdfs:comment": ["A florist."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/Store"}]
    },
    {
      "@id": "http://schema.org/FoodEvent",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["FoodEvent"],
      "rdfs:comment": ["Event type: Food event."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/Event"}]
    },
    {
      "@id": "http://schema.org/FurnitureStore",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["FurnitureStore"],
      "rdfs:comment": ["A furniture store."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/Store"}]
    },
    {
      "@id": "http://schema.org/GardenStore",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["GardenStore"],
      "rdfs:comment": ["A garden store."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/Store"}]
    },
    {
      "@id": "http://schema.org/GasStation",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["GasStation"],
      "rdfs:comment": ["A gas station."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/AutomotiveBusiness"}]
    },
    {
      "@id": "http://schema.org/GatedResidenceCommunity",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["GatedResidenceCommunity"],
      "rdfs:comment": ["Residence type: Gated community."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/Residence"}]
    },
    {
      "@id": "http://schema.org/GeneralContractor",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["GeneralContractor"],
      "rdfs:comment": ["A general contractor."],
      "rdfs:subClassOf": [
        {"@id": "http://schema.org/HomeAndConstructionBusiness"},
        {"@id": "http://schema.org/ProfessionalService"}
      ]
    },
    {
      "@id": "http://schema.org/GeoCoordinates",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["GeoCoordinates"],
      "rdfs:comment": ["The geographic coordinates of a place or event."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/StructuredValue"}]
    },
    {
      "@id": "http://schema.org/GeoShape",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["GeoShape"],
      "rdfs:comment": ["The geographic shape of a place."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/StructuredValue"}],
      "dc:source": [{"@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_rNews"}]
    },
    {
      "@id": "http://schema.org/GolfCourse",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["GolfCourse"],
      "rdfs:comment": ["A golf course."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/SportsActivityLocation"}]
    },
    {
      "@id": "http://schema.org/GovernmentOffice",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["GovernmentOffice"],
      "rdfs:comment": ["A government office—for example, an IRS or DMV office."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/LocalBusiness"}]
    },
    {
      "@id": "http://schema.org/GovernmentOrganization",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["GovernmentOrganization"],
      "rdfs:comment": ["A governmental organization or agency."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/Organization"}]
    },
    {
      "@id": "http://schema.org/GroceryStore",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["GroceryStore"],
      "rdfs:comment": ["A grocery store."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/Store"}]
    },
    {
      "@id": "http://schema.org/HVACBusiness",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["HVACBusiness"],
      "rdfs:comment": ["An HVAC service."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/HomeAndConstructionBusiness"}]
    },
    {
      "@id": "http://schema.org/HairSalon",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["HairSalon"],
      "rdfs:comment": ["A hair salon."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/HealthAndBeautyBusiness"}]
    },
    {
      "@id": "http://schema.org/HardwareStore",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["HardwareStore"],
      "rdfs:comment": ["A hardware store."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/Store"}]
    },
    {
      "@id": "http://schema.org/HealthClub",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["HealthClub"],
      "rdfs:comment": ["A health club."],
      "rdfs:subClassOf": [
        {"@id": "http://schema.org/HealthAndBeautyBusiness"},
        {"@id": "http://schema.org/SportsActivityLocation"}
      ]
    },
    {
      "@id": "http://schema.org/HighSchool",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["HighSchool"],
      "rdfs:comment": ["A high school."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/EducationalOrganization"}]
    },
    {
      "@id": "http://schema.org/HinduTemple",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["HinduTemple"],
      "rdfs:comment": ["A Hindu temple."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/PlaceOfWorship"}]
    },
    {
      "@id": "http://schema.org/HobbyShop",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["HobbyShop"],
      "rdfs:comment": ["A hobby store."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/Store"}]
    },
    {
      "@id": "http://schema.org/HomeGoodsStore",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["HomeGoodsStore"],
      "rdfs:comment": ["A home goods store."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/Store"}]
    },
    {
      "@id": "http://schema.org/Hospital",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["Hospital"],
      "rdfs:comment": ["A hospital."],
      "rdfs:subClassOf": [
        {"@id": "http://schema.org/MedicalOrganization"},
        {"@id": "http://schema.org/CivicStructure"},
        {"@id": "http://schema.org/EmergencyService"}
      ]
    },
    {
      "@id": "http://schema.org/Hostel",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["Hostel"],
      "rdfs:comment": ["A hostel."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/LodgingBusiness"}]
    },
    {
      "@id": "http://schema.org/Hotel",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["Hotel"],
      "rdfs:comment": ["A hotel."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/LodgingBusiness"}]
    },
    {
      "@id": "http://schema.org/HousePainter",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["HousePainter"],
      "rdfs:comment": ["A house painting service."],
      "rdfs:subClassOf": [
        {"@id": "http://schema.org/HomeAndConstructionBusiness"},
        {"@id": "http://schema.org/ProfessionalService"}
      ]
    },
    {
      "@id": "http://schema.org/IceCreamShop",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["IceCreamShop"],
      "rdfs:comment": ["An ice cream shop"],
      "rdfs:subClassOf": [{"@id": "http://schema.org/FoodEstablishment"}]
    },
    {
      "@id": "http://schema.org/ImageGallery",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["ImageGallery"],
      "rdfs:comment": ["Web page type: Image gallery page."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/CollectionPage"}]
    },
    {
      "@id": "http://schema.org/ImageObject",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["ImageObject"],
      "rdfs:comment": ["An image file."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/MediaObject"}]
    },
    {
      "@id": "http://schema.org/InsuranceAgency",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["InsuranceAgency"],
      "rdfs:comment": ["Insurance agency."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/FinancialService"}]
    },
    {
      "@id": "http://schema.org/Integer",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["Integer"],
      "rdfs:comment": ["Data type: Integer."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/Number"}]
    },
    {
      "@id": "http://schema.org/InternetCafe",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["InternetCafe"],
      "rdfs:comment": ["An internet cafe."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/LocalBusiness"}]
    },
    {
      "@id": "http://schema.org/ItemAvailability",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["ItemAvailability"],
      "rdfs:comment": ["A list of possible product availablity options."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/Enumeration"}]
    },
    {
      "@id": "http://schema.org/ItemList",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["ItemList"],
      "rdfs:comment": ["A list of items of any sort—for example, Top 10 Movies About Weathermen, or Top 100 Party Songs. Not to be confused with HTML lists, which are often used only for formatting."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/CreativeWork"}]
    },
    {
      "@id": "http://schema.org/ItemPage",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["ItemPage"],
      "rdfs:comment": ["A page devoted to a single item, such as a particular product or hotel."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/WebPage"}]
    },
    {
      "@id": "http://schema.org/JewelryStore",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["JewelryStore"],
      "rdfs:comment": ["A jewelry store."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/Store"}]
    },
    {
      "@id": "http://schema.org/JobPosting",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["JobPosting"],
      "rdfs:comment": ["A listing that describes a job opening in a certain organization."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/Intangible"}]
    },
    {
      "@id": "http://schema.org/LakeBodyOfWater",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["LakeBodyOfWater"],
      "rdfs:comment": ["A lake (for example, Lake Pontrachain)."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/BodyOfWater"}]
    },
    {
      "@id": "http://schema.org/LandmarksOrHistoricalBuildings",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["LandmarksOrHistoricalBuildings"],
      "rdfs:comment": ["An historical landmark or building."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/Place"}]
    },
    {
      "@id": "http://schema.org/Language",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["Language"],
      "rdfs:comment": ["Natural languages such as Spanish, Tamil, Hindi, English, etc. and programming languages such as Scheme and Lisp."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/Intangible"}]
    },
    {
      "@id": "http://schema.org/LegislativeBuilding",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["LegislativeBuilding"],
      "rdfs:comment": ["A legislative building—for example, the state capitol."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/GovernmentBuilding"}]
    },
    {
      "@id": "http://schema.org/Library",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["Library"],
      "rdfs:comment": ["A library."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/LocalBusiness"}]
    },
    {
      "@id": "http://schema.org/LiquorStore",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["LiquorStore"],
      "rdfs:comment": ["A liquor store."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/Store"}]
    },
    {
      "@id": "http://schema.org/LiteraryEvent",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["LiteraryEvent"],
      "rdfs:comment": ["Event type: Literary event."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/Event"}]
    },
    {
      "@id": "http://schema.org/Locksmith",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["Locksmith"],
      "rdfs:comment": ["A locksmith."],
      "rdfs:subClassOf": [
        {"@id": "http://schema.org/HomeAndConstructionBusiness"},
        {"@id": "http://schema.org/ProfessionalService"}
      ]
    },
    {
      "@id": "http://schema.org/Map",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["Map"],
      "rdfs:comment": ["A map."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/CreativeWork"}]
    },
    {
      "@id": "http://schema.org/Mass",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["Mass"],
      "rdfs:comment": ["Properties that take Mass as values are of the form '<Number> <Mass unit of measure>'. E.g., '7 kg'"],
      "rdfs:subClassOf": [{"@id": "http://schema.org/Quantity"}]
    },
    {
      "@id": "http://schema.org/MedicalClinic",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["MedicalClinic"],
      "rdfs:comment": ["A medical clinic."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/MedicalOrganization"}]
    },
    {
      "@id": "http://schema.org/MensClothingStore",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["MensClothingStore"],
      "rdfs:comment": ["A men's clothing store."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/Store"}]
    },
    {
      "@id": "http://schema.org/MiddleSchool",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["MiddleSchool"],
      "rdfs:comment": ["A middle school."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/EducationalOrganization"}]
    },
    {
      "@id": "http://schema.org/SoftwareApplication",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["SoftwareApplication"],
      "rdfs:comment": ["A software application."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/CreativeWork"}]
    },
    {
      "@id": "http://schema.org/MobileApplication",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["MobileApplication"],
      "rdfs:subClassOf": [{"@id": "http://schema.org/SoftwareApplication"}]
    },
    {
      "@id": "http://schema.org/MobilePhoneStore",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["MobilePhoneStore"],
      "rdfs:comment": ["A mobile-phone store."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/Store"}]
    },
    {
      "@id": "http://schema.org/Mosque",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["Mosque"],
      "rdfs:comment": ["A mosque."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/PlaceOfWorship"}]
    },
    {
      "@id": "http://schema.org/Motel",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["Motel"],
      "rdfs:comment": ["A motel."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/LodgingBusiness"}]
    },
    {
      "@id": "http://schema.org/MotorcycleDealer",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["MotorcycleDealer"],
      "rdfs:comment": ["A motorcycle dealer."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/AutomotiveBusiness"}]
    },
    {
      "@id": "http://schema.org/MotorcycleRepair",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["MotorcycleRepair"],
      "rdfs:comment": ["A motorcycle repair shop."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/AutomotiveBusiness"}]
    },
    {
      "@id": "http://schema.org/Mountain",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["Mountain"],
      "rdfs:comment": ["A mountain, like Mount Whitney or Mount Everest"],
      "rdfs:subClassOf": [{"@id": "http://schema.org/Landform"}]
    },
    {
      "@id": "http://schema.org/Movie",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["Movie"],
      "rdfs:comment": ["A movie."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/CreativeWork"}]
    },
    {
      "@id": "http://schema.org/MovieRentalStore",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["MovieRentalStore"],
      "rdfs:comment": ["A movie rental store."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/Store"}]
    },
    {
      "@id": "http://schema.org/MovieTheater",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["MovieTheater"],
      "rdfs:comment": ["A movie theater."],
      "rdfs:subClassOf": [
        {"@id": "http://schema.org/EntertainmentBusiness"},
        {"@id": "http://schema.org/CivicStructure"}
      ]
    },
    {
      "@id": "http://schema.org/MovingCompany",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["MovingCompany"],
      "rdfs:comment": ["A moving company."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/HomeAndConstructionBusiness"}]
    },
    {
      "@id": "http://schema.org/Museum",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["Museum"],
      "rdfs:comment": ["A museum."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/CivicStructure"}]
    },
    {
      "@id": "http://schema.org/MusicPlaylist",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["MusicPlaylist"],
      "rdfs:comment": ["A collection of music tracks in playlist form."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/CreativeWork"}]
    },
    {
      "@id": "http://schema.org/MusicAlbum",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["MusicAlbum"],
      "rdfs:comment": ["A collection of music tracks."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/MusicPlaylist"}]
    },
    {
      "@id": "http://schema.org/MusicEvent",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["MusicEvent"],
      "rdfs:comment": ["Event type: Music event."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/Event"}]
    },
    {
      "@id": "http://schema.org/MusicGroup",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["MusicGroup"],
      "rdfs:comment": ["A musical group, such as a band, an orchestra, or a choir. Can also be a solo musician."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/PerformingGroup"}]
    },
    {
      "@id": "http://schema.org/MusicRecording",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["MusicRecording"],
      "rdfs:comment": ["A music recording (track), usually a single song."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/CreativeWork"}]
    },
    {
      "@id": "http://schema.org/MusicStore",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["MusicStore"],
      "rdfs:comment": ["A music store."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/Store"}]
    },
    {
      "@id": "http://schema.org/MusicVenue",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["MusicVenue"],
      "rdfs:comment": ["A music venue."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/CivicStructure"}]
    },
    {
      "@id": "http://schema.org/MusicVideoObject",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["MusicVideoObject"],
      "rdfs:comment": ["A music video file."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/MediaObject"}]
    },
    {
      "@id": "http://schema.org/NGO",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["NGO"],
      "rdfs:comment": ["Organization: Non-governmental Organization."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/Organization"}]
    },
    {
      "@id": "http://schema.org/NailSalon",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["NailSalon"],
      "rdfs:comment": ["A nail salon."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/HealthAndBeautyBusiness"}]
    },
    {
      "@id": "http://schema.org/NewsArticle",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["NewsArticle"],
      "rdfs:comment": ["A news article"],
      "rdfs:subClassOf": [{"@id": "http://schema.org/Article"}],
      "dc:source": [{"@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_rNews"}]
    },
    {
      "@id": "http://schema.org/NightClub",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["NightClub"],
      "rdfs:comment": ["A nightclub or discotheque."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/EntertainmentBusiness"}]
    },
    {
      "@id": "http://schema.org/Notary",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["Notary"],
      "rdfs:comment": ["A notary."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/ProfessionalService"}]
    },
    {
      "@id": "http://schema.org/NutritionInformation",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["NutritionInformation"],
      "rdfs:comment": ["Nutritional information about the recipe."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/StructuredValue"}]
    },
    {
      "@id": "http://schema.org/OceanBodyOfWater",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["OceanBodyOfWater"],
      "rdfs:comment": ["An ocean (for example, the Pacific)."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/BodyOfWater"}]
    },
    {
      "@id": "http://schema.org/OfferItemCondition",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["OfferItemCondition"],
      "rdfs:comment": ["A list of possible conditions for the item for sale."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/Enumeration"}]
    },
    {
      "@id": "http://schema.org/OfficeEquipmentStore",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["OfficeEquipmentStore"],
      "rdfs:comment": ["An office equipment store."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/Store"}]
    },
    {
      "@id": "http://schema.org/Optician",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["Optician"],
      "rdfs:comment": ["An optician's store."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/MedicalOrganization"}]
    },
    {
      "@id": "http://schema.org/OutletStore",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["OutletStore"],
      "rdfs:comment": ["An outlet store."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/Store"}]
    },
    {
      "@id": "http://schema.org/Painting",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["Painting"],
      "rdfs:comment": ["A painting."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/CreativeWork"}]
    },
    {
      "@id": "http://schema.org/Park",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["Park"],
      "rdfs:comment": ["A park."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/CivicStructure"}]
    },
    {
      "@id": "http://schema.org/ParkingFacility",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["ParkingFacility"],
      "rdfs:comment": ["A parking lot or other parking facility."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/CivicStructure"}]
    },
    {
      "@id": "http://schema.org/PawnShop",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["PawnShop"],
      "rdfs:comment": ["A pawnstore."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/Store"}]
    },
    {
      "@id": "http://schema.org/PerformingArtsTheater",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["PerformingArtsTheater"],
      "rdfs:comment": ["A theatre or other performing art center."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/CivicStructure"}]
    },
    {
      "@id": "http://schema.org/Person",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["Person"],
      "rdfs:comment": ["A person (alive, dead, undead, or fictional)."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/Thing"}],
      "dc:source": [{"@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_rNews"}]
    },
    {
      "@id": "http://schema.org/PetStore",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["PetStore"],
      "rdfs:comment": ["A pet store."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/Store"}]
    },
    {
      "@id": "http://schema.org/Pharmacy",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["Pharmacy"],
      "rdfs:comment": ["A pharmacy or drugstore."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/MedicalOrganization"}]
    },
    {
      "@id": "http://schema.org/Photograph",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["Photograph"],
      "rdfs:comment": ["A photograph."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/CreativeWork"}]
    },
    {
      "@id": "http://schema.org/Physician",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["Physician"],
      "rdfs:comment": ["A doctor's office."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/MedicalOrganization"}]
    },
    {
      "@id": "http://schema.org/Playground",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["Playground"],
      "rdfs:comment": ["A playground."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/CivicStructure"}]
    },
    {
      "@id": "http://schema.org/Plumber",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["Plumber"],
      "rdfs:comment": ["A plumbing service."],
      "rdfs:subClassOf": [
        {"@id": "http://schema.org/HomeAndConstructionBusiness"},
        {"@id": "http://schema.org/ProfessionalService"}
      ]
    },
    {
      "@id": "http://schema.org/PoliceStation",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["PoliceStation"],
      "rdfs:comment": ["A police station."],
      "rdfs:subClassOf": [
        {"@id": "http://schema.org/CivicStructure"},
        {"@id": "http://schema.org/EmergencyService"}
      ]
    },
    {
      "@id": "http://schema.org/Pond",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["Pond"],
      "rdfs:comment": ["A pond"],
      "rdfs:subClassOf": [{"@id": "http://schema.org/BodyOfWater"}]
    },
    {
      "@id": "http://schema.org/PostOffice",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["PostOffice"],
      "rdfs:comment": ["A post office."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/GovernmentOffice"}]
    },
    {
      "@id": "http://schema.org/PostalAddress",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["PostalAddress"],
      "rdfs:comment": ["The mailing address."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/ContactPoint"}]
    },
    {
      "@id": "http://schema.org/Preschool",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["Preschool"],
      "rdfs:comment": ["A preschool."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/EducationalOrganization"}]
    },
    {
      "@id": "http://schema.org/Product",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["Product"],
      "rdfs:comment": ["A product is anything that is made available for sale—for example, a pair of shoes, a concert ticket, or a car."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/Thing"}]
    },
    {
      "@id": "http://schema.org/ProfilePage",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["ProfilePage"],
      "rdfs:comment": ["Web page type: Profile page."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/WebPage"}]
    },
    {
      "@id": "http://schema.org/PublicSwimmingPool",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["PublicSwimmingPool"],
      "rdfs:comment": ["A public swimming pool."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/SportsActivityLocation"}]
    },
    {
      "@id": "http://schema.org/RVPark",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["RVPark"],
      "rdfs:comment": ["An RV park."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/CivicStructure"}]
    },
    {
      "@id": "http://schema.org/RadioStation",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["RadioStation"],
      "rdfs:comment": ["A radio station."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/LocalBusiness"}]
    },
    {
      "@id": "http://schema.org/RealEstateAgent",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["RealEstateAgent"],
      "rdfs:comment": ["A real-estate agent."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/LocalBusiness"}]
    },
    {
      "@id": "http://schema.org/Recipe",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["Recipe"],
      "rdfs:comment": ["A recipe."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/CreativeWork"}]
    },
    {
      "@id": "http://schema.org/RecyclingCenter",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["RecyclingCenter"],
      "rdfs:comment": ["A recycling center."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/LocalBusiness"}]
    },
    {
      "@id": "http://schema.org/Reservoir",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["Reservoir"],
      "rdfs:comment": ["A reservoir, like the Lake Kariba reservoir."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/BodyOfWater"}]
    },
    {
      "@id": "http://schema.org/Restaurant",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["Restaurant"],
      "rdfs:comment": ["A restaurant."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/FoodEstablishment"}]
    },
    {
      "@id": "http://schema.org/Review",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["Review"],
      "rdfs:comment": ["A review of an item - for example, a restaurant, movie, or store."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/CreativeWork"}]
    },
    {
      "@id": "http://schema.org/RiverBodyOfWater",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["RiverBodyOfWater"],
      "rdfs:comment": ["A river (for example, the broad majestic Shannon)."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/BodyOfWater"}]
    },
    {
      "@id": "http://schema.org/RoofingContractor",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["RoofingContractor"],
      "rdfs:comment": ["A roofing contractor."],
      "rdfs:subClassOf": [
        {"@id": "http://schema.org/HomeAndConstructionBusiness"},
        {"@id": "http://schema.org/ProfessionalService"}
      ]
    },
    {
      "@id": "http://schema.org/SaleEvent",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["SaleEvent"],
      "rdfs:comment": ["Event type: Sales event."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/Event"}]
    },
    {
      "@id": "http://schema.org/ScholarlyArticle",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["ScholarlyArticle"],
      "rdfs:comment": ["A scholarly article."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/Article"}]
    },
    {
      "@id": "http://schema.org/School",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["School"],
      "rdfs:comment": ["A school."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/EducationalOrganization"}]
    },
    {
      "@id": "http://schema.org/Sculpture",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["Sculpture"],
      "rdfs:comment": ["A piece of sculpture."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/CreativeWork"}]
    },
    {
      "@id": "http://schema.org/SeaBodyOfWater",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["SeaBodyOfWater"],
      "rdfs:comment": ["A sea (for example, the Caspian sea)."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/BodyOfWater"}]
    },
    {
      "@id": "http://schema.org/SearchResultsPage",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["SearchResultsPage"],
      "rdfs:comment": ["Web page type: Search results page."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/WebPage"}]
    },
    {
      "@id": "http://schema.org/SelfStorage",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["SelfStorage"],
      "rdfs:comment": ["Self-storage facility."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/LocalBusiness"}]
    },
    {
      "@id": "http://schema.org/ShoeStore",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["ShoeStore"],
      "rdfs:comment": ["A shoe store."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/Store"}]
    },
    {
      "@id": "http://schema.org/ShoppingCenter",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["ShoppingCenter"],
      "rdfs:comment": ["A shopping center or mall."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/LocalBusiness"}]
    },
    {
      "@id": "http://schema.org/SingleFamilyResidence",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["SingleFamilyResidence"],
      "rdfs:comment": ["Residence type: Single-family home."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/Residence"}]
    },
    {
      "@id": "http://schema.org/WebPageElement",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["WebPageElement"],
      "rdfs:comment": ["A web page element, like a table or an image"],
      "rdfs:subClassOf": [{"@id": "http://schema.org/CreativeWork"}]
    },
    {
      "@id": "http://schema.org/SiteNavigationElement",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["SiteNavigationElement"],
      "rdfs:comment": ["A navigation element of the page."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/WebPageElement"}]
    },
    {
      "@id": "http://schema.org/SkiResort",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["SkiResort"],
      "rdfs:comment": ["A ski resort."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/SportsActivityLocation"}]
    },
    {
      "@id": "http://schema.org/SocialEvent",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["SocialEvent"],
      "rdfs:comment": ["Event type: Social event."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/Event"}]
    },
    {
      "@id": "http://schema.org/SportingGoodsStore",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["SportingGoodsStore"],
      "rdfs:comment": ["A sporting goods store."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/Store"}]
    },
    {
      "@id": "http://schema.org/SportsClub",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["SportsClub"],
      "rdfs:comment": ["A sports club."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/SportsActivityLocation"}]
    },
    {
      "@id": "http://schema.org/SportsEvent",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["SportsEvent"],
      "rdfs:comment": ["Event type: Sports event."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/Event"}]
    },
    {
      "@id": "http://schema.org/SportsTeam",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["SportsTeam"],
      "rdfs:comment": ["Organization: Sports team."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/Organization"}]
    },
    {
      "@id": "http://schema.org/StadiumOrArena",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["StadiumOrArena"],
      "rdfs:comment": ["A stadium."],
      "rdfs:subClassOf": [
        {"@id": "http://schema.org/CivicStructure"},
        {"@id": "http://schema.org/SportsActivityLocation"}
      ]
    },
    {
      "@id": "http://schema.org/State",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["State"],
      "rdfs:comment": ["A state or province."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/AdministrativeArea"}]
    },
    {
      "@id": "http://schema.org/SubwayStation",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["SubwayStation"],
      "rdfs:comment": ["A subway station."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/CivicStructure"}]
    },
    {
      "@id": "http://schema.org/Synagogue",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["Synagogue"],
      "rdfs:comment": ["A synagogue."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/PlaceOfWorship"}]
    },
    {
      "@id": "http://schema.org/TVEpisode",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["TVEpisode"],
      "rdfs:comment": ["An episode of a TV series or season."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/CreativeWork"}]
    },
    {
      "@id": "http://schema.org/TVSeason",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["TVSeason"],
      "rdfs:comment": ["A TV season."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/CreativeWork"}]
    },
    {
      "@id": "http://schema.org/TVSeries",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["TVSeries"],
      "rdfs:comment": ["A television series."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/CreativeWork"}]
    },
    {
      "@id": "http://schema.org/Table",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["Table"],
      "rdfs:comment": ["A table on the page."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/WebPageElement"}]
    },
    {
      "@id": "http://schema.org/TattooParlor",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["TattooParlor"],
      "rdfs:comment": ["A tattoo parlor."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/HealthAndBeautyBusiness"}]
    },
    {
      "@id": "http://schema.org/TaxiStand",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["TaxiStand"],
      "rdfs:comment": ["A taxi stand."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/CivicStructure"}]
    },
    {
      "@id": "http://schema.org/TelevisionStation",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["TelevisionStation"],
      "rdfs:comment": ["A television station."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/LocalBusiness"}]
    },
    {
      "@id": "http://schema.org/TennisComplex",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["TennisComplex"],
      "rdfs:comment": ["A tennis complex."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/SportsActivityLocation"}]
    },
    {
      "@id": "http://schema.org/Text",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["Text"],
      "rdfs:comment": ["Data type: Text."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/DataType"}]
    },
    {
      "@id": "http://schema.org/TheaterEvent",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["TheaterEvent"],
      "rdfs:comment": ["Event type: Theater performance."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/Event"}]
    },
    {
      "@id": "http://schema.org/TheaterGroup",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["TheaterGroup"],
      "rdfs:comment": ["A theater group or company—for example, the Royal Shakespeare Company or Druid Theatre."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/PerformingGroup"}]
    },
    {
      "@id": "http://schema.org/TireShop",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["TireShop"],
      "rdfs:comment": ["A tire shop."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/Store"}]
    },
    {
      "@id": "http://schema.org/TouristAttraction",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["TouristAttraction"],
      "rdfs:comment": ["A tourist attraction."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/Place"}]
    },
    {
      "@id": "http://schema.org/TouristInformationCenter",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["TouristInformationCenter"],
      "rdfs:comment": ["A tourist information center."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/LocalBusiness"}]
    },
    {
      "@id": "http://schema.org/ToyStore",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["ToyStore"],
      "rdfs:comment": ["A toystore."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/Store"}]
    },
    {
      "@id": "http://schema.org/TrainStation",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["TrainStation"],
      "rdfs:comment": ["A train station."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/CivicStructure"}]
    },
    {
      "@id": "http://schema.org/TravelAgency",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["TravelAgency"],
      "rdfs:comment": ["A travel agency."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/LocalBusiness"}]
    },
    {
      "@id": "http://schema.org/URL",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["URL"],
      "rdfs:comment": ["Data type: URL."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/Text"}]
    },
    {
      "@id": "http://schema.org/UserInteraction",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["UserInteraction"],
      "rdfs:comment": ["A user interacting with a page"],
      "rdfs:subClassOf": [{"@id": "http://schema.org/Event"}]
    },
    {
      "@id": "http://schema.org/UserBlocks",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["UserBlocks"],
      "rdfs:comment": ["User interaction: Block this content."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/UserInteraction"}]
    },
    {
      "@id": "http://schema.org/UserCheckins",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["UserCheckins"],
      "rdfs:comment": ["User interaction: Check-in at a place."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/UserInteraction"}]
    },
    {
      "@id": "http://schema.org/UserComments",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["UserComments"],
      "rdfs:comment": ["The UserInteraction event in which a user comments on an item."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/UserInteraction"}],
      "dc:source": [{"@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_rNews"}]
    },
    {
      "@id": "http://schema.org/UserDownloads",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["UserDownloads"],
      "rdfs:comment": ["User interaction: Download of an item."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/UserInteraction"}]
    },
    {
      "@id": "http://schema.org/UserLikes",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["UserLikes"],
      "rdfs:comment": ["User interaction: Like an item."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/UserInteraction"}]
    },
    {
      "@id": "http://schema.org/UserPageVisits",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["UserPageVisits"],
      "rdfs:comment": ["User interaction: Visit to a web page."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/UserInteraction"}]
    },
    {
      "@id": "http://schema.org/UserPlays",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["UserPlays"],
      "rdfs:comment": ["User interaction: Play count of an item, for example a video or a song."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/UserInteraction"}]
    },
    {
      "@id": "http://schema.org/UserPlusOnes",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["UserPlusOnes"],
      "rdfs:comment": ["User interaction: +1."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/UserInteraction"}]
    },
    {
      "@id": "http://schema.org/UserTweets",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["UserTweets"],
      "rdfs:comment": ["User interaction: Tweets."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/UserInteraction"}]
    },
    {
      "@id": "http://schema.org/VeterinaryCare",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["VeterinaryCare"],
      "rdfs:comment": ["A vet's office."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/MedicalOrganization"}]
    },
    {
      "@id": "http://schema.org/VideoGallery",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["VideoGallery"],
      "rdfs:comment": ["Web page type: Video gallery page."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/CollectionPage"}]
    },
    {
      "@id": "http://schema.org/VideoObject",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["VideoObject"],
      "rdfs:comment": ["A video file."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/MediaObject"}],
      "dc:source": [{"@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_rNews"}]
    },
    {
      "@id": "http://schema.org/VisualArtsEvent",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["VisualArtsEvent"],
      "rdfs:comment": ["Event type: Visual arts event."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/Event"}]
    },
    {
      "@id": "http://schema.org/Volcano",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["Volcano"],
      "rdfs:comment": ["A volcano, like Fuji san"],
      "rdfs:subClassOf": [{"@id": "http://schema.org/Landform"}]
    },
    {
      "@id": "http://schema.org/WPAdBlock",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["WPAdBlock"],
      "rdfs:comment": ["An advertising section of the page."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/WebPageElement"}]
    },
    {
      "@id": "http://schema.org/WPFooter",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["WPFooter"],
      "rdfs:comment": ["The footer section of the page."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/WebPageElement"}]
    },
    {
      "@id": "http://schema.org/WPHeader",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["WPHeader"],
      "rdfs:comment": ["The header section of the page."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/WebPageElement"}]
    },
    {
      "@id": "http://schema.org/WPSideBar",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["WPSideBar"],
      "rdfs:comment": ["A sidebar section of the page."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/WebPageElement"}]
    },
    {
      "@id": "http://schema.org/Waterfall",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["Waterfall"],
      "rdfs:comment": ["A waterfall, like Niagara"],
      "rdfs:subClassOf": [{"@id": "http://schema.org/BodyOfWater"}]
    },
    {
      "@id": "http://schema.org/WebApplication",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["WebApplication"],
      "rdfs:comment": ["Web applications."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/SoftwareApplication"}]
    },
    {
      "@id": "http://schema.org/WholesaleStore",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["WholesaleStore"],
      "rdfs:comment": ["A wholesale store."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/Store"}]
    },
    {
      "@id": "http://schema.org/Winery",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["Winery"],
      "rdfs:comment": ["A winery."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/FoodEstablishment"}]
    },
    {
      "@id": "http://schema.org/Zoo",
      "@type": ["rdfs:Class"],
      "rdfs:label": ["Zoo"],
      "rdfs:comment": ["A zoo."],
      "rdfs:subClassOf": [{"@id": "http://schema.org/CivicStructure"}]
    },
    {
      "@id": "http://schema.org/highPrice",
      "@type": ["rdf:Property"],
      "rdfs:label": ["highPrice"],
      "rdfs:comment": ["The highest price of all offers available."],
      "http://schema.org/domain": [{"@id": "http://schema.org/AggregateOffer"}],
      "http://schema.org/range": [
        {"@id": "http://schema.org/Number"},
        {"@id": "http://schema.org/Text"}
      ]
    },
    {
      "@id": "http://schema.org/lowPrice",
      "@type": ["rdf:Property"],
      "rdfs:label": ["lowPrice"],
      "rdfs:comment": ["The lowest price of all offers available."],
      "http://schema.org/domain": [{"@id": "http://schema.org/AggregateOffer"}],
      "http://schema.org/range": [
        {"@id": "http://schema.org/Number"},
        {"@id": "http://schema.org/Text"}
      ]
    },
    {
      "@id": "http://schema.org/offerCount",
      "@type": ["rdf:Property"],
      "rdfs:label": ["offerCount"],
      "rdfs:comment": ["The number of offers for the product."],
      "http://schema.org/domain": [{"@id": "http://schema.org/AggregateOffer"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Integer"}]
    },
    {
      "@id": "http://schema.org/itemReviewed",
      "@type": ["rdf:Property"],
      "rdfs:label": ["itemReviewed"],
      "rdfs:comment": ["The item that is being reviewed/rated."],
      "http://schema.org/domain": [
        {"@id": "http://schema.org/AggregateRating"},
        {"@id": "http://schema.org/Review"}
      ],
      "http://schema.org/range": [{"@id": "http://schema.org/Thing"}]
    },
    {
      "@id": "http://schema.org/ratingCount",
      "@type": ["rdf:Property"],
      "rdfs:label": ["ratingCount"],
      "rdfs:comment": ["The count of total number of ratings."],
      "http://schema.org/domain": [{"@id": "http://schema.org/AggregateRating"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Number"}]
    },
    {
      "@id": "http://schema.org/reviewCount",
      "@type": ["rdf:Property"],
      "rdfs:label": ["reviewCount"],
      "rdfs:comment": ["The count of total number of reviews."],
      "http://schema.org/domain": [{"@id": "http://schema.org/AggregateRating"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Number"}]
    },
    {
      "@id": "http://schema.org/articleBody",
      "@type": ["rdf:Property"],
      "rdfs:label": ["articleBody"],
      "rdfs:comment": ["The actual body of the article."],
      "http://schema.org/domain": [{"@id": "http://schema.org/Article"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Text"}]
    },
    {
      "@id": "http://schema.org/articleSection",
      "@type": ["rdf:Property"],
      "rdfs:label": ["articleSection"],
      "rdfs:comment": ["Articles may belong to one or more 'sections' in a magazine or newspaper, such as Sports, Lifestyle, etc."],
      "http://schema.org/domain": [{"@id": "http://schema.org/Article"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Text"}]
    },
    {
      "@id": "http://schema.org/wordCount",
      "@type": ["rdf:Property"],
      "rdfs:label": ["wordCount"],
      "rdfs:comment": ["The number of words in the text of the Article."],
      "http://schema.org/domain": [{"@id": "http://schema.org/Article"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Integer"}]
    },
    {
      "@id": "http://schema.org/transcript",
      "@type": ["rdf:Property"],
      "rdfs:label": ["transcript"],
      "rdfs:comment": ["If this MediaObject is an AudioObject or VideoObject, the transcript of that object."],
      "http://schema.org/domain": [
        {"@id": "http://schema.org/AudioObject"},
        {"@id": "http://schema.org/VideoObject"}
      ],
      "http://schema.org/range": [{"@id": "http://schema.org/Text"}]
    },
    {
      "@id": "http://schema.org/blogPost",
      "@type": ["rdf:Property"],
      "rdfs:label": ["blogPost"],
      "rdfs:comment": ["A posting that is part of this blog."],
      "http://schema.org/domain": [{"@id": "http://schema.org/Blog"}],
      "http://schema.org/range": [{"@id": "http://schema.org/BlogPosting"}]
    },
    {
      "@id": "http://schema.org/blogPosts",
      "@type": ["rdf:Property"],
      "rdfs:label": ["blogPosts"],
      "rdfs:comment": ["The postings that are part of this blog (legacy spelling; see singular form, blogPost)."],
      "http://schema.org/domain": [{"@id": "http://schema.org/Blog"}],
      "http://schema.org/range": [{"@id": "http://schema.org/BlogPosting"}]
    },
    {
      "@id": "http://schema.org/bookEdition",
      "@type": ["rdf:Property"],
      "rdfs:label": ["bookEdition"],
      "rdfs:comment": ["The edition of the book."],
      "http://schema.org/domain": [{"@id": "http://schema.org/Book"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Text"}]
    },
    {
      "@id": "http://schema.org/bookFormat",
      "@type": ["rdf:Property"],
      "rdfs:label": ["bookFormat"],
      "rdfs:comment": ["The format of the book."],
      "http://schema.org/domain": [{"@id": "http://schema.org/Book"}],
      "http://schema.org/range": [{"@id": "http://schema.org/BookFormatType"}]
    },
    {
      "@id": "http://schema.org/illustrator",
      "@type": ["rdf:Property"],
      "rdfs:label": ["illustrator"],
      "rdfs:comment": ["The illustrator of the book."],
      "http://schema.org/domain": [{"@id": "http://schema.org/Book"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Person"}]
    },
    {
      "@id": "http://schema.org/isbn",
      "@type": ["rdf:Property"],
      "rdfs:label": ["isbn"],
      "rdfs:comment": ["The ISBN of the book."],
      "http://schema.org/domain": [{"@id": "http://schema.org/Book"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Text"}]
    },
    {
      "@id": "http://schema.org/numberOfPages",
      "@type": ["rdf:Property"],
      "rdfs:label": ["numberOfPages"],
      "rdfs:comment": ["The number of pages in the book."],
      "http://schema.org/domain": [{"@id": "http://schema.org/Book"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Integer"}]
    },
    {
      "@id": "http://schema.org/openingHours",
      "@type": ["rdf:Property"],
      "rdfs:label": ["openingHours"],
      "rdfs:comment": ["The opening hours for a business. Opening hours can be specified as a weekly time range, starting with days, then times per day. Multiple days can be listed with commas ',' separating each day. Day or time ranges are specified using a hyphen '-'.- Days are specified using the following two-letter combinations: Mo, Tu, We, Th, Fr, Sa, Su.- Times are specified using 24:00 time. For example, 3pm is specified as 15:00. - Here is an example: <time itemprop=\"openingHours\" datetime=\"Tu,Th 16:00-20:00\">Tuesdays and Thursdays 4-8pm</time>. - If a business is open 7 days a week, then it can be specified as <time itemprop=\"openingHours\" datetime=\"Mo-Su\">Monday through Sunday, all day</time>."],
      "http://schema.org/domain": [
        {"@id": "http://schema.org/LocalBusiness"},
        {"@id": "http://schema.org/CivicStructure"}
      ],
      "http://schema.org/range": [{"@id": "http://schema.org/Duration"}]
    },
    {
      "@id": "http://schema.org/contactType",
      "@type": ["rdf:Property"],
      "rdfs:label": ["contactType"],
      "rdfs:comment": ["A person or organization can have different contact points, for different purposes. For example, a sales contact point, a PR contact point and so on. This property is used to specify the kind of contact point."],
      "http://schema.org/domain": [{"@id": "http://schema.org/ContactPoint"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Text"}]
    },
    {
      "@id": "http://schema.org/email",
      "@type": ["rdf:Property"],
      "rdfs:label": ["email"],
      "rdfs:comment": ["Email address."],
      "http://schema.org/domain": [
        {"@id": "http://schema.org/Organization"},
        {"@id": "http://schema.org/ContactPoint"},
        {"@id": "http://schema.org/Person"}
      ],
      "http://schema.org/range": [{"@id": "http://schema.org/Text"}]
    },
    {
      "@id": "http://schema.org/faxNumber",
      "@type": ["rdf:Property"],
      "rdfs:label": ["faxNumber"],
      "rdfs:comment": ["The fax number."],
      "http://schema.org/domain": [
        {"@id": "http://schema.org/Organization"},
        {"@id": "http://schema.org/Place"},
        {"@id": "http://schema.org/ContactPoint"},
        {"@id": "http://schema.org/Person"}
      ],
      "http://schema.org/range": [{"@id": "http://schema.org/Text"}]
    },
    {
      "@id": "http://schema.org/telephone",
      "@type": ["rdf:Property"],
      "rdfs:label": ["telephone"],
      "rdfs:comment": ["The telephone number."],
      "http://schema.org/domain": [
        {"@id": "http://schema.org/Organization"},
        {"@id": "http://schema.org/Place"},
        {"@id": "http://schema.org/ContactPoint"},
        {"@id": "http://schema.org/Person"}
      ],
      "http://schema.org/range": [{"@id": "http://schema.org/Text"}]
    },
    {
      "@id": "http://schema.org/tickerSymbol",
      "@type": ["rdf:Property"],
      "rdfs:label": ["tickerSymbol"],
      "rdfs:comment": ["The exchange traded instrument associated with a Corporation object. The tickerSymbol is expressed as an exchange and an instrument name separated by a space character. For the exchange component of the tickerSymbol attribute, we reccommend using the controlled vocaulary of Market Identifier Codes (MIC) specified in ISO15022."],
      "http://schema.org/domain": [{"@id": "http://schema.org/Corporation"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Text"}]
    },
    {
      "@id": "http://schema.org/about",
      "@type": ["rdf:Property"],
      "rdfs:label": ["about"],
      "rdfs:comment": ["The subject matter of the content."],
      "http://schema.org/domain": [{"@id": "http://schema.org/CreativeWork"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Thing"}]
    },
    {
      "@id": "http://schema.org/accountablePerson",
      "@type": ["rdf:Property"],
      "rdfs:label": ["accountablePerson"],
      "rdfs:comment": ["Specifies the Person that is legally accountable for the CreativeWork."],
      "http://schema.org/domain": [{"@id": "http://schema.org/CreativeWork"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Person"}]
    },
    {
      "@id": "http://schema.org/aggregateRating",
      "@type": ["rdf:Property"],
      "rdfs:label": ["aggregateRating"],
      "rdfs:comment": ["The overall rating, based on a collection of reviews or ratings, of the item."],
      "http://schema.org/domain": [
        {"@id": "http://schema.org/CreativeWork"},
        {"@id": "http://schema.org/Organization"},
        {"@id": "http://schema.org/Place"},
        {"@id": "http://schema.org/Offer"},
        {"@id": "http://schema.org/Product"}
      ],
      "http://schema.org/range": [{"@id": "http://schema.org/AggregateRating"}]
    },
    {
      "@id": "http://schema.org/alternativeHeadline",
      "@type": ["rdf:Property"],
      "rdfs:label": ["alternativeHeadline"],
      "rdfs:comment": ["A secondary title of the CreativeWork."],
      "http://schema.org/domain": [{"@id": "http://schema.org/CreativeWork"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Text"}]
    },
    {
      "@id": "http://schema.org/associatedMedia",
      "@type": ["rdf:Property"],
      "rdfs:label": ["associatedMedia"],
      "rdfs:comment": ["The media objects that encode this creative work. This property is a synonym for encodings."],
      "http://schema.org/domain": [{"@id": "http://schema.org/CreativeWork"}],
      "http://schema.org/range": [{"@id": "http://schema.org/MediaObject"}]
    },
    {
      "@id": "http://schema.org/audio",
      "@type": ["rdf:Property"],
      "rdfs:label": ["audio"],
      "rdfs:comment": ["An embedded audio object."],
      "http://schema.org/domain": [{"@id": "http://schema.org/CreativeWork"}],
      "http://schema.org/range": [{"@id": "http://schema.org/AudioObject"}]
    },
    {
      "@id": "http://schema.org/author",
      "@type": ["rdf:Property"],
      "rdfs:label": ["author"],
      "rdfs:comment": ["The author of this content. Please note that author is special in that HTML 5 provides a special mechanism for indicating authorship via the rel tag. That is equivalent to this and may be used interchangeably."],
      "http://schema.org/domain": [{"@id": "http://schema.org/CreativeWork"}],
      "http://schema.org/range": [
        {"@id": "http://schema.org/Person"},
        {"@id": "http://schema.org/Organization"}
      ]
    },
    {
      "@id": "http://schema.org/award",
      "@type": ["rdf:Property"],
      "rdfs:label": ["award"],
      "rdfs:comment": ["An award won by this person or for this creative work."],
      "http://schema.org/domain": [
        {"@id": "http://schema.org/CreativeWork"},
        {"@id": "http://schema.org/Person"}
      ],
      "http://schema.org/range": [{"@id": "http://schema.org/Text"}]
    },
    {
      "@id": "http://schema.org/awards",
      "@type": ["rdf:Property"],
      "rdfs:label": ["awards"],
      "rdfs:comment": ["Awards won by this person or for this creative work. (legacy spelling; see singular form, award)"],
      "http://schema.org/domain": [
        {"@id": "http://schema.org/CreativeWork"},
        {"@id": "http://schema.org/Person"}
      ],
      "http://schema.org/range": [{"@id": "http://schema.org/Text"}]
    },
    {
      "@id": "http://schema.org/comment",
      "@type": ["rdf:Property"],
      "rdfs:label": ["comment"],
      "rdfs:comment": ["Comments, typically from users, on this CreativeWork."],
      "http://schema.org/domain": [{"@id": "http://schema.org/CreativeWork"}],
      "http://schema.org/range": [{"@id": "http://schema.org/UserComments"}]
    },
    {
      "@id": "http://schema.org/contentLocation",
      "@type": ["rdf:Property"],
      "rdfs:label": ["contentLocation"],
      "rdfs:comment": ["The location of the content."],
      "http://schema.org/domain": [{"@id": "http://schema.org/CreativeWork"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Place"}]
    },
    {
      "@id": "http://schema.org/contentRating",
      "@type": ["rdf:Property"],
      "rdfs:label": ["contentRating"],
      "rdfs:comment": ["Official rating of a piece of content—for example,'MPAA PG-13'."],
      "http://schema.org/domain": [{"@id": "http://schema.org/CreativeWork"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Text"}]
    },
    {
      "@id": "http://schema.org/contributor",
      "@type": ["rdf:Property"],
      "rdfs:label": ["contributor"],
      "rdfs:comment": ["A secondary contributor to the CreativeWork."],
      "http://schema.org/domain": [{"@id": "http://schema.org/CreativeWork"}],
      "http://schema.org/range": [
        {"@id": "http://schema.org/Person"},
        {"@id": "http://schema.org/Organization"}
      ]
    },
    {
      "@id": "http://schema.org/copyrightHolder",
      "@type": ["rdf:Property"],
      "rdfs:label": ["copyrightHolder"],
      "rdfs:comment": ["The party holding the legal copyright to the CreativeWork."],
      "http://schema.org/domain": [{"@id": "http://schema.org/CreativeWork"}],
      "http://schema.org/range": [
        {"@id": "http://schema.org/Person"},
        {"@id": "http://schema.org/Organization"}
      ]
    },
    {
      "@id": "http://schema.org/copyrightYear",
      "@type": ["rdf:Property"],
      "rdfs:label": ["copyrightYear"],
      "rdfs:comment": ["The year during which the claimed copyright for the CreativeWork was first asserted."],
      "http://schema.org/domain": [{"@id": "http://schema.org/CreativeWork"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Number"}]
    },
    {
      "@id": "http://schema.org/creator",
      "@type": ["rdf:Property"],
      "rdfs:label": ["creator"],
      "rdfs:comment": ["The creator/author of this CreativeWork or UserComments. This is the same as the Author property for CreativeWork."],
      "http://schema.org/domain": [
        {"@id": "http://schema.org/CreativeWork"},
        {"@id": "http://schema.org/UserComments"}
      ],
      "http://schema.org/range": [
        {"@id": "http://schema.org/Person"},
        {"@id": "http://schema.org/Organization"}
      ]
    },
    {
      "@id": "http://schema.org/dateCreated",
      "@type": ["rdf:Property"],
      "rdfs:label": ["dateCreated"],
      "rdfs:comment": ["The date on which the CreativeWork was created."],
      "http://schema.org/domain": [{"@id": "http://schema.org/CreativeWork"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Date"}]
    },
    {
      "@id": "http://schema.org/dateModified",
      "@type": ["rdf:Property"],
      "rdfs:label": ["dateModified"],
      "rdfs:comment": ["The date on which the CreativeWork was most recently modified."],
      "http://schema.org/domain": [{"@id": "http://schema.org/CreativeWork"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Date"}]
    },
    {
      "@id": "http://schema.org/datePublished",
      "@type": ["rdf:Property"],
      "rdfs:label": ["datePublished"],
      "rdfs:comment": ["Date of first broadcast/publication."],
      "http://schema.org/domain": [{"@id": "http://schema.org/CreativeWork"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Date"}]
    },
    {
      "@id": "http://schema.org/discussionUrl",
      "@type": ["rdf:Property"],
      "rdfs:label": ["discussionUrl"],
      "rdfs:comment": ["A link to the page containing the comments of the CreativeWork."],
      "http://schema.org/domain": [{"@id": "http://schema.org/CreativeWork"}],
      "http://schema.org/range": [{"@id": "http://schema.org/URL"}]
    },
    {
      "@id": "http://schema.org/editor",
      "@type": ["rdf:Property"],
      "rdfs:label": ["editor"],
      "rdfs:comment": ["Specifies the Person who edited the CreativeWork."],
      "http://schema.org/domain": [{"@id": "http://schema.org/CreativeWork"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Person"}]
    },
    {
      "@id": "http://schema.org/encoding",
      "@type": ["rdf:Property"],
      "rdfs:label": ["encoding"],
      "rdfs:comment": ["A media object that encode this CreativeWork."],
      "http://schema.org/domain": [{"@id": "http://schema.org/CreativeWork"}],
      "http://schema.org/range": [{"@id": "http://schema.org/MediaObject"}]
    },
    {
      "@id": "http://schema.org/encodings",
      "@type": ["rdf:Property"],
      "rdfs:label": ["encodings"],
      "rdfs:comment": ["The media objects that encode this creative work (legacy spelling; see singular form, encoding)."],
      "http://schema.org/domain": [{"@id": "http://schema.org/CreativeWork"}],
      "http://schema.org/range": [{"@id": "http://schema.org/MediaObject"}]
    },
    {
      "@id": "http://schema.org/genre",
      "@type": ["rdf:Property"],
      "rdfs:label": ["genre"],
      "rdfs:comment": ["Genre of the creative work"],
      "http://schema.org/domain": [{"@id": "http://schema.org/CreativeWork"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Text"}]
    },
    {
      "@id": "http://schema.org/headline",
      "@type": ["rdf:Property"],
      "rdfs:label": ["headline"],
      "rdfs:comment": ["Headline of the article"],
      "http://schema.org/domain": [{"@id": "http://schema.org/CreativeWork"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Text"}]
    },
    {
      "@id": "http://schema.org/inLanguage",
      "@type": ["rdf:Property"],
      "rdfs:label": ["inLanguage"],
      "rdfs:comment": ["The language of the content. please use one of the language codes from the IETF BCP 47 standard."],
      "http://schema.org/domain": [{"@id": "http://schema.org/CreativeWork"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Text"}]
    },
    {
      "@id": "http://schema.org/interactionCount",
      "@type": ["rdf:Property"],
      "rdfs:label": ["interactionCount"],
      "rdfs:comment": ["A count of a specific user interactions with this item—for example, 20 UserLikes, 5 UserComments, or 300 UserDownloads. The user interaction type should be one of the sub types of UserInteraction."],
      "http://schema.org/domain": [
        {"@id": "http://schema.org/CreativeWork"},
        {"@id": "http://schema.org/Organization"},
        {"@id": "http://schema.org/Place"},
        {"@id": "http://schema.org/MediaObject"},
        {"@id": "http://schema.org/Person"}
      ],
      "http://schema.org/range": [{"@id": "http://schema.org/Text"}]
    },
    {
      "@id": "http://schema.org/isFamilyFriendly",
      "@type": ["rdf:Property"],
      "rdfs:label": ["isFamilyFriendly"],
      "rdfs:comment": ["Indicates whether this content is family friendly."],
      "http://schema.org/domain": [{"@id": "http://schema.org/CreativeWork"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Boolean"}]
    },
    {
      "@id": "http://schema.org/keywords",
      "@type": ["rdf:Property"],
      "rdfs:label": ["keywords"],
      "rdfs:comment": ["The keywords/tags used to describe this content."],
      "http://schema.org/domain": [{"@id": "http://schema.org/CreativeWork"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Text"}]
    },
    {
      "@id": "http://schema.org/mentions",
      "@type": ["rdf:Property"],
      "rdfs:label": ["mentions"],
      "rdfs:comment": ["Indicates that the CreativeWork contains a reference to, but is not necessarily about a concept."],
      "http://schema.org/domain": [{"@id": "http://schema.org/CreativeWork"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Thing"}]
    },
    {
      "@id": "http://schema.org/offers",
      "@type": ["rdf:Property"],
      "rdfs:label": ["offers"],
      "rdfs:comment": ["An offer to sell this item—for example, an offer to sell a product, the DVD of a movie, or tickets to an event."],
      "http://schema.org/domain": [
        {"@id": "http://schema.org/CreativeWork"},
        {"@id": "http://schema.org/MediaObject"},
        {"@id": "http://schema.org/Event"},
        {"@id": "http://schema.org/Product"}
      ],
      "http://schema.org/range": [{"@id": "http://schema.org/Offer"}]
    },
    {
      "@id": "http://schema.org/provider",
      "@type": ["rdf:Property"],
      "rdfs:label": ["provider"],
      "rdfs:comment": ["Specifies the Person or Organization that distributed the CreativeWork."],
      "http://schema.org/domain": [{"@id": "http://schema.org/CreativeWork"}],
      "http://schema.org/range": [
        {"@id": "http://schema.org/Person"},
        {"@id": "http://schema.org/Organization"}
      ]
    },
    {
      "@id": "http://schema.org/publisher",
      "@type": ["rdf:Property"],
      "rdfs:label": ["publisher"],
      "rdfs:comment": ["The publisher of the creative work."],
      "http://schema.org/domain": [{"@id": "http://schema.org/CreativeWork"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Organization"}]
    },
    {
      "@id": "http://schema.org/publishingPrinciples",
      "@type": ["rdf:Property"],
      "rdfs:label": ["publishingPrinciples"],
      "rdfs:comment": ["Link to page describing the editorial principles of the organization primarily responsible for the creation of the CreativeWork."],
      "http://schema.org/domain": [{"@id": "http://schema.org/CreativeWork"}],
      "http://schema.org/range": [{"@id": "http://schema.org/URL"}]
    },
    {
      "@id": "http://schema.org/review",
      "@type": ["rdf:Property"],
      "rdfs:label": ["review"],
      "rdfs:comment": ["A review of the item."],
      "http://schema.org/domain": [
        {"@id": "http://schema.org/CreativeWork"},
        {"@id": "http://schema.org/Organization"},
        {"@id": "http://schema.org/Place"},
        {"@id": "http://schema.org/Offer"},
        {"@id": "http://schema.org/Product"}
      ],
      "http://schema.org/range": [{"@id": "http://schema.org/Review"}]
    },
    {
      "@id": "http://schema.org/reviews",
      "@type": ["rdf:Property"],
      "rdfs:label": ["reviews"],
      "rdfs:comment": ["Review of the item (legacy spelling; see singular form, review)."],
      "http://schema.org/domain": [
        {"@id": "http://schema.org/CreativeWork"},
        {"@id": "http://schema.org/Organization"},
        {"@id": "http://schema.org/Place"},
        {"@id": "http://schema.org/Offer"},
        {"@id": "http://schema.org/Product"}
      ],
      "http://schema.org/range": [{"@id": "http://schema.org/Review"}]
    },
    {
      "@id": "http://schema.org/sourceOrganization",
      "@type": ["rdf:Property"],
      "rdfs:label": ["sourceOrganization"],
      "rdfs:comment": ["The Organization on whose behalf the creator was working."],
      "http://schema.org/domain": [{"@id": "http://schema.org/CreativeWork"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Organization"}]
    },
    {
      "@id": "http://schema.org/text",
      "@type": ["rdf:Property"],
      "rdfs:label": ["text"],
      "rdfs:comment": ["The textual content of this CreativeWork."],
      "http://schema.org/domain": [{"@id": "http://schema.org/CreativeWork"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Text"}]
    },
    {
      "@id": "http://schema.org/thumbnailUrl",
      "@type": ["rdf:Property"],
      "rdfs:label": ["thumbnailUrl"],
      "rdfs:comment": ["A thumbnail image relevant to the Thing."],
      "http://schema.org/domain": [{"@id": "http://schema.org/CreativeWork"}],
      "http://schema.org/range": [{"@id": "http://schema.org/URL"}]
    },
    {
      "@id": "http://schema.org/version",
      "@type": ["rdf:Property"],
      "rdfs:label": ["version"],
      "rdfs:comment": ["The version of the CreativeWork embodied by a specified resource."],
      "http://schema.org/domain": [{"@id": "http://schema.org/CreativeWork"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Number"}]
    },
    {
      "@id": "http://schema.org/video",
      "@type": ["rdf:Property"],
      "rdfs:label": ["video"],
      "rdfs:comment": ["An embedded video object."],
      "http://schema.org/domain": [{"@id": "http://schema.org/CreativeWork"}],
      "http://schema.org/range": [{"@id": "http://schema.org/VideoObject"}]
    },
    {
      "@id": "http://schema.org/alumni",
      "@type": ["rdf:Property"],
      "rdfs:label": ["alumni"],
      "rdfs:comment": ["Alumni of educational organization."],
      "http://schema.org/domain": [{"@id": "http://schema.org/EducationalOrganization"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Person"}]
    },
    {
      "@id": "http://schema.org/attendee",
      "@type": ["rdf:Property"],
      "rdfs:label": ["attendee"],
      "rdfs:comment": ["A person or organization attending the event."],
      "http://schema.org/domain": [{"@id": "http://schema.org/Event"}],
      "http://schema.org/range": [
        {"@id": "http://schema.org/Person"},
        {"@id": "http://schema.org/Organization"}
      ]
    },
    {
      "@id": "http://schema.org/attendees",
      "@type": ["rdf:Property"],
      "rdfs:label": ["attendees"],
      "rdfs:comment": ["A person attending the event (legacy spelling; see singular form, attendee)."],
      "http://schema.org/domain": [{"@id": "http://schema.org/Event"}],
      "http://schema.org/range": [
        {"@id": "http://schema.org/Person"},
        {"@id": "http://schema.org/Organization"}
      ]
    },
    {
      "@id": "http://schema.org/duration",
      "@type": ["rdf:Property"],
      "rdfs:label": ["duration"],
      "rdfs:comment": ["The duration of the item (movie, audio recording, event, etc.) in ISO 8601 date format."],
      "http://schema.org/domain": [
        {"@id": "http://schema.org/MediaObject"},
        {"@id": "http://schema.org/Event"},
        {"@id": "http://schema.org/Movie"},
        {"@id": "http://schema.org/MusicRecording"}
      ],
      "http://schema.org/range": [{"@id": "http://schema.org/Duration"}]
    },
    {
      "@id": "http://schema.org/endDate",
      "@type": ["rdf:Property"],
      "rdfs:label": ["endDate"],
      "rdfs:comment": ["The end date and time of the event (in ISO 8601 date format)."],
      "http://schema.org/domain": [
        {"@id": "http://schema.org/Event"},
        {"@id": "http://schema.org/TVSeason"},
        {"@id": "http://schema.org/TVSeries"}
      ],
      "http://schema.org/range": [{"@id": "http://schema.org/Date"}]
    },
    {
      "@id": "http://schema.org/location",
      "@type": ["rdf:Property"],
      "rdfs:label": ["location"],
      "rdfs:comment": ["The location of the event or organization."],
      "http://schema.org/domain": [
        {"@id": "http://schema.org/Organization"},
        {"@id": "http://schema.org/Event"}
      ],
      "http://schema.org/range": [
        {"@id": "http://schema.org/Place"},
        {"@id": "http://schema.org/PostalAddress"}
      ]
    },
    {
      "@id": "http://schema.org/performer",
      "@type": ["rdf:Property"],
      "rdfs:label": ["performer"],
      "rdfs:comment": ["A performer at the event—for example, a presenter, musician, musical group or actor."],
      "http://schema.org/domain": [{"@id": "http://schema.org/Event"}],
      "http://schema.org/range": [
        {"@id": "http://schema.org/Person"},
        {"@id": "http://schema.org/Organization"}
      ]
    },
    {
      "@id": "http://schema.org/performers",
      "@type": ["rdf:Property"],
      "rdfs:label": ["performers"],
      "rdfs:comment": ["The main performer or performers of the event—for example, a presenter, musician, or actor (legacy spelling; see singular form, performer)."],
      "http://schema.org/domain": [{"@id": "http://schema.org/Event"}],
      "http://schema.org/range": [
        {"@id": "http://schema.org/Person"},
        {"@id": "http://schema.org/Organization"}
      ]
    },
    {
      "@id": "http://schema.org/startDate",
      "@type": ["rdf:Property"],
      "rdfs:label": ["startDate"],
      "rdfs:comment": ["The start date and time of the event (in ISO 8601 date format)."],
      "http://schema.org/domain": [
        {"@id": "http://schema.org/Event"},
        {"@id": "http://schema.org/TVSeason"},
        {"@id": "http://schema.org/TVSeries"}
      ],
      "http://schema.org/range": [{"@id": "http://schema.org/Date"}]
    },
    {
      "@id": "http://schema.org/subEvent",
      "@type": ["rdf:Property"],
      "rdfs:label": ["subEvent"],
      "rdfs:comment": ["An Event that is part of this event. For example, a conference event includes many presentations, each are a subEvent of the conference."],
      "http://schema.org/domain": [{"@id": "http://schema.org/Event"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Event"}]
    },
    {
      "@id": "http://schema.org/subEvents",
      "@type": ["rdf:Property"],
      "rdfs:label": ["subEvents"],
      "rdfs:comment": ["Events that are a part of this event. For example, a conference event includes many presentations, each are subEvents of the conference (legacy spelling; see singular form, subEvent)."],
      "http://schema.org/domain": [{"@id": "http://schema.org/Event"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Event"}]
    },
    {
      "@id": "http://schema.org/superEvent",
      "@type": ["rdf:Property"],
      "rdfs:label": ["superEvent"],
      "rdfs:comment": ["An event that this event is a part of. For example, a collection of individual music performances might each have a music festival as their superEvent."],
      "http://schema.org/domain": [{"@id": "http://schema.org/Event"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Event"}]
    },
    {
      "@id": "http://schema.org/acceptsReservations",
      "@type": ["rdf:Property"],
      "rdfs:label": ["acceptsReservations"],
      "rdfs:comment": ["Either Yes/No, or a URL at which reservations can be made."],
      "http://schema.org/domain": [{"@id": "http://schema.org/FoodEstablishment"}],
      "http://schema.org/range": [
        {"@id": "http://schema.org/Text"},
        {"@id": "http://schema.org/URL"}
      ]
    },
    {
      "@id": "http://schema.org/menu",
      "@type": ["rdf:Property"],
      "rdfs:label": ["menu"],
      "rdfs:comment": ["Either the actual menu or a URL of the menu."],
      "http://schema.org/domain": [{"@id": "http://schema.org/FoodEstablishment"}],
      "http://schema.org/range": [
        {"@id": "http://schema.org/Text"},
        {"@id": "http://schema.org/URL"}
      ]
    },
    {
      "@id": "http://schema.org/servesCuisine",
      "@type": ["rdf:Property"],
      "rdfs:label": ["servesCuisine"],
      "rdfs:comment": ["The cuisine of the restaurant."],
      "http://schema.org/domain": [{"@id": "http://schema.org/FoodEstablishment"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Text"}]
    },
    {
      "@id": "http://schema.org/elevation",
      "@type": ["rdf:Property"],
      "rdfs:label": ["elevation"],
      "rdfs:comment": ["The elevation of a location."],
      "http://schema.org/domain": [
        {"@id": "http://schema.org/GeoCoordinates"},
        {"@id": "http://schema.org/GeoShape"}
      ],
      "http://schema.org/range": [
        {"@id": "http://schema.org/Number"},
        {"@id": "http://schema.org/Text"}
      ]
    },
    {
      "@id": "http://schema.org/latitude",
      "@type": ["rdf:Property"],
      "rdfs:label": ["latitude"],
      "rdfs:comment": ["The latitude of a location. For example 37.42242."],
      "http://schema.org/domain": [{"@id": "http://schema.org/GeoCoordinates"}],
      "http://schema.org/range": [
        {"@id": "http://schema.org/Number"},
        {"@id": "http://schema.org/Text"}
      ]
    },
    {
      "@id": "http://schema.org/longitude",
      "@type": ["rdf:Property"],
      "rdfs:label": ["longitude"],
      "rdfs:comment": ["The longitude of a location. For example -122.08585."],
      "http://schema.org/domain": [{"@id": "http://schema.org/GeoCoordinates"}],
      "http://schema.org/range": [
        {"@id": "http://schema.org/Number"},
        {"@id": "http://schema.org/Text"}
      ]
    },
    {
      "@id": "http://schema.org/box",
      "@type": ["rdf:Property"],
      "rdfs:label": ["box"],
      "rdfs:comment": ["A polygon is the area enclosed by a point-to-point path for which the starting and ending points are the same. A polygon is expressed as a series of four or more spacedelimited points where the first and final points are identical."],
      "http://schema.org/domain": [{"@id": "http://schema.org/GeoShape"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Text"}]
    },
    {
      "@id": "http://schema.org/circle",
      "@type": ["rdf:Property"],
      "rdfs:label": ["circle"],
      "rdfs:comment": ["A circle is the circular region of a specified radius centered at a specified latitude and longitude. A circle is expressed as a pair followed by a radius in meters."],
      "http://schema.org/domain": [{"@id": "http://schema.org/GeoShape"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Text"}]
    },
    {
      "@id": "http://schema.org/line",
      "@type": ["rdf:Property"],
      "rdfs:label": ["line"],
      "rdfs:comment": ["A line is a point-to-point path consisting of two or more points. A line is expressed as a series of two or more point objects separated by space."],
      "http://schema.org/domain": [{"@id": "http://schema.org/GeoShape"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Text"}]
    },
    {
      "@id": "http://schema.org/polygon",
      "@type": ["rdf:Property"],
      "rdfs:label": ["polygon"],
      "rdfs:comment": ["A polygon is the area enclosed by a point-to-point path for which the starting and ending points are the same. A polygon is expressed as a series of four or more spacedelimited points where the first and final points are identical."],
      "http://schema.org/domain": [{"@id": "http://schema.org/GeoShape"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Text"}]
    },
    {
      "@id": "http://schema.org/caption",
      "@type": ["rdf:Property"],
      "rdfs:label": ["caption"],
      "rdfs:comment": ["The caption for this object."],
      "http://schema.org/domain": [
        {"@id": "http://schema.org/ImageObject"},
        {"@id": "http://schema.org/VideoObject"}
      ],
      "http://schema.org/range": [{"@id": "http://schema.org/Text"}]
    },
    {
      "@id": "http://schema.org/exifData",
      "@type": ["rdf:Property"],
      "rdfs:label": ["exifData"],
      "rdfs:comment": ["exif data for this object."],
      "http://schema.org/domain": [{"@id": "http://schema.org/ImageObject"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Text"}]
    },
    {
      "@id": "http://schema.org/representativeOfPage",
      "@type": ["rdf:Property"],
      "rdfs:label": ["representativeOfPage"],
      "rdfs:comment": ["Indicates whether this image is representative of the content of the page."],
      "http://schema.org/domain": [{"@id": "http://schema.org/ImageObject"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Boolean"}]
    },
    {
      "@id": "http://schema.org/thumbnail",
      "@type": ["rdf:Property"],
      "rdfs:label": ["thumbnail"],
      "rdfs:comment": ["Thumbnail image for an image or video."],
      "http://schema.org/domain": [
        {"@id": "http://schema.org/ImageObject"},
        {"@id": "http://schema.org/VideoObject"}
      ],
      "http://schema.org/range": [{"@id": "http://schema.org/ImageObject"}]
    },
    {
      "@id": "http://schema.org/itemListElement",
      "@type": ["rdf:Property"],
      "rdfs:label": ["itemListElement"],
      "rdfs:comment": ["A single list item."],
      "http://schema.org/domain": [{"@id": "http://schema.org/ItemList"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Text"}]
    },
    {
      "@id": "http://schema.org/itemListOrder",
      "@type": ["rdf:Property"],
      "rdfs:label": ["itemListOrder"],
      "rdfs:comment": ["Type of ordering (e.g. Ascending, Descending, Unordered)."],
      "http://schema.org/domain": [{"@id": "http://schema.org/ItemList"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Text"}]
    },
    {
      "@id": "http://schema.org/baseSalary",
      "@type": ["rdf:Property"],
      "rdfs:label": ["baseSalary"],
      "rdfs:comment": ["The base salary of the job."],
      "http://schema.org/domain": [{"@id": "http://schema.org/JobPosting"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Number"}]
    },
    {
      "@id": "http://schema.org/benefits",
      "@type": ["rdf:Property"],
      "rdfs:label": ["benefits"],
      "rdfs:comment": ["Description of benefits associated with the job."],
      "http://schema.org/domain": [{"@id": "http://schema.org/JobPosting"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Text"}]
    },
    {
      "@id": "http://schema.org/datePosted",
      "@type": ["rdf:Property"],
      "rdfs:label": ["datePosted"],
      "rdfs:comment": ["Publication date for the job posting."],
      "http://schema.org/domain": [{"@id": "http://schema.org/JobPosting"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Date"}]
    },
    {
      "@id": "http://schema.org/educationRequirements",
      "@type": ["rdf:Property"],
      "rdfs:label": ["educationRequirements"],
      "rdfs:comment": ["Educational background needed for the position."],
      "http://schema.org/domain": [{"@id": "http://schema.org/JobPosting"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Text"}]
    },
    {
      "@id": "http://schema.org/employmentType",
      "@type": ["rdf:Property"],
      "rdfs:label": ["employmentType"],
      "rdfs:comment": ["Type of employment (e.g. full-time, part-time, contract, temporary, seasonal, internship)."],
      "http://schema.org/domain": [{"@id": "http://schema.org/JobPosting"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Text"}]
    },
    {
      "@id": "http://schema.org/experienceRequirements",
      "@type": ["rdf:Property"],
      "rdfs:label": ["experienceRequirements"],
      "rdfs:comment": ["Description of skills and experience needed for the position."],
      "http://schema.org/domain": [{"@id": "http://schema.org/JobPosting"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Text"}]
    },
    {
      "@id": "http://schema.org/hiringOrganization",
      "@type": ["rdf:Property"],
      "rdfs:label": ["hiringOrganization"],
      "rdfs:comment": ["Organization offering the job position."],
      "http://schema.org/domain": [{"@id": "http://schema.org/JobPosting"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Organization"}]
    },
    {
      "@id": "http://schema.org/incentives",
      "@type": ["rdf:Property"],
      "rdfs:label": ["incentives"],
      "rdfs:comment": ["Description of bonus and commission compensation aspects of the job."],
      "http://schema.org/domain": [{"@id": "http://schema.org/JobPosting"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Text"}]
    },
    {
      "@id": "http://schema.org/industry",
      "@type": ["rdf:Property"],
      "rdfs:label": ["industry"],
      "rdfs:comment": ["The industry associated with the job position."],
      "http://schema.org/domain": [{"@id": "http://schema.org/JobPosting"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Text"}]
    },
    {
      "@id": "http://schema.org/jobLocation",
      "@type": ["rdf:Property"],
      "rdfs:label": ["jobLocation"],
      "rdfs:comment": ["A (typically single) geographic location associated with the job position."],
      "http://schema.org/domain": [{"@id": "http://schema.org/JobPosting"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Place"}]
    },
    {
      "@id": "http://schema.org/occupationalCategory",
      "@type": ["rdf:Property"],
      "rdfs:label": ["occupationalCategory"],
      "rdfs:comment": ["Category or categories describing the job. Use BLS O*NET-SOC taxonomy: http://www.onetcenter.org/taxonomy.html. Ideally includes textual label and formal code, with the property repeated for each applicable value."],
      "http://schema.org/domain": [{"@id": "http://schema.org/JobPosting"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Text"}]
    },
    {
      "@id": "http://schema.org/qualifications",
      "@type": ["rdf:Property"],
      "rdfs:label": ["qualifications"],
      "rdfs:comment": ["Specific qualifications required for this role."],
      "http://schema.org/domain": [{"@id": "http://schema.org/JobPosting"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Text"}]
    },
    {
      "@id": "http://schema.org/responsibilities",
      "@type": ["rdf:Property"],
      "rdfs:label": ["responsibilities"],
      "rdfs:comment": ["Responsibilities associated with this role."],
      "http://schema.org/domain": [{"@id": "http://schema.org/JobPosting"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Text"}]
    },
    {
      "@id": "http://schema.org/salaryCurrency",
      "@type": ["rdf:Property"],
      "rdfs:label": ["salaryCurrency"],
      "rdfs:comment": ["The currency (coded using ISO 4217, http://en.wikipedia.org/wiki/ISO_4217 used for the main salary information in this job posting."],
      "http://schema.org/domain": [{"@id": "http://schema.org/JobPosting"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Text"}]
    },
    {
      "@id": "http://schema.org/skills",
      "@type": ["rdf:Property"],
      "rdfs:label": ["skills"],
      "rdfs:comment": ["Skills required to fulfill this role."],
      "http://schema.org/domain": [{"@id": "http://schema.org/JobPosting"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Text"}]
    },
    {
      "@id": "http://schema.org/specialCommitments",
      "@type": ["rdf:Property"],
      "rdfs:label": ["specialCommitments"],
      "rdfs:comment": ["Any special commitments associated with this job posting. Valid entries include VeteranCommit, MilitarySpouseCommit, etc."],
      "http://schema.org/domain": [{"@id": "http://schema.org/JobPosting"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Text"}]
    },
    {
      "@id": "http://schema.org/title",
      "@type": ["rdf:Property"],
      "rdfs:label": ["title"],
      "rdfs:comment": ["The title of the job."],
      "http://schema.org/domain": [{"@id": "http://schema.org/JobPosting"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Text"}]
    },
    {
      "@id": "http://schema.org/workHours",
      "@type": ["rdf:Property"],
      "rdfs:label": ["workHours"],
      "rdfs:comment": ["The typical working hours for this job (e.g. 1st shift, night shift, 8am-5pm)."],
      "http://schema.org/domain": [{"@id": "http://schema.org/JobPosting"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Text"}]
    },
    {
      "@id": "http://schema.org/branchOf",
      "@type": ["rdf:Property"],
      "rdfs:label": ["branchOf"],
      "rdfs:comment": ["The larger organization that this local business is a branch of, if any."],
      "http://schema.org/domain": [{"@id": "http://schema.org/LocalBusiness"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Organization"}]
    },
    {
      "@id": "http://schema.org/currenciesAccepted",
      "@type": ["rdf:Property"],
      "rdfs:label": ["currenciesAccepted"],
      "rdfs:comment": ["The currency accepted (in ISO 4217 currency format)."],
      "http://schema.org/domain": [{"@id": "http://schema.org/LocalBusiness"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Text"}]
    },
    {
      "@id": "http://schema.org/paymentAccepted",
      "@type": ["rdf:Property"],
      "rdfs:label": ["paymentAccepted"],
      "rdfs:comment": ["Cash, credit card, etc."],
      "http://schema.org/domain": [{"@id": "http://schema.org/LocalBusiness"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Text"}]
    },
    {
      "@id": "http://schema.org/priceRange",
      "@type": ["rdf:Property"],
      "rdfs:label": ["priceRange"],
      "rdfs:comment": ["The price range of the business, for example $$$."],
      "http://schema.org/domain": [{"@id": "http://schema.org/LocalBusiness"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Text"}]
    },
    {
      "@id": "http://schema.org/associatedArticle",
      "@type": ["rdf:Property"],
      "rdfs:label": ["associatedArticle"],
      "rdfs:comment": ["A NewsArticle associated with the Media Object."],
      "http://schema.org/domain": [{"@id": "http://schema.org/MediaObject"}],
      "http://schema.org/range": [{"@id": "http://schema.org/NewsArticle"}]
    },
    {
      "@id": "http://schema.org/bitrate",
      "@type": ["rdf:Property"],
      "rdfs:label": ["bitrate"],
      "rdfs:comment": ["The bitrate of the media object."],
      "http://schema.org/domain": [{"@id": "http://schema.org/MediaObject"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Text"}]
    },
    {
      "@id": "http://schema.org/contentSize",
      "@type": ["rdf:Property"],
      "rdfs:label": ["contentSize"],
      "rdfs:comment": ["File size in (mega/kilo) bytes."],
      "http://schema.org/domain": [{"@id": "http://schema.org/MediaObject"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Text"}]
    },
    {
      "@id": "http://schema.org/contentUrl",
      "@type": ["rdf:Property"],
      "rdfs:label": ["contentUrl"],
      "rdfs:comment": ["Actual bytes of the media object, for example the image file or video file. (previous spelling: contentURL)"],
      "http://schema.org/domain": [{"@id": "http://schema.org/MediaObject"}],
      "http://schema.org/range": [{"@id": "http://schema.org/URL"}]
    },
    {
      "@id": "http://schema.org/embedUrl",
      "@type": ["rdf:Property"],
      "rdfs:label": ["embedUrl"],
      "rdfs:comment": ["A URL pointing to a player for a specific video. In general, this is the information in the src element of an embed tag and should not be the same as the content of the loc tag. (previous spelling: embedURL)"],
      "http://schema.org/domain": [{"@id": "http://schema.org/MediaObject"}],
      "http://schema.org/range": [{"@id": "http://schema.org/URL"}]
    },
    {
      "@id": "http://schema.org/encodesCreativeWork",
      "@type": ["rdf:Property"],
      "rdfs:label": ["encodesCreativeWork"],
      "rdfs:comment": ["The creative work encoded by this media object"],
      "http://schema.org/domain": [{"@id": "http://schema.org/MediaObject"}],
      "http://schema.org/range": [{"@id": "http://schema.org/CreativeWork"}]
    },
    {
      "@id": "http://schema.org/encodingFormat",
      "@type": ["rdf:Property"],
      "rdfs:label": ["encodingFormat"],
      "rdfs:comment": ["mp3, mpeg4, etc."],
      "http://schema.org/domain": [{"@id": "http://schema.org/MediaObject"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Text"}]
    },
    {
      "@id": "http://schema.org/expires",
      "@type": ["rdf:Property"],
      "rdfs:label": ["expires"],
      "rdfs:comment": ["Date the content expires and is no longer useful or available. Useful for videos."],
      "http://schema.org/domain": [{"@id": "http://schema.org/MediaObject"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Date"}]
    },
    {
      "@id": "http://schema.org/height",
      "@type": ["rdf:Property"],
      "rdfs:label": ["height"],
      "rdfs:comment": ["The height of the media object."],
      "http://schema.org/domain": [{"@id": "http://schema.org/MediaObject"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Distance"}]
    },
    {
      "@id": "http://schema.org/playerType",
      "@type": ["rdf:Property"],
      "rdfs:label": ["playerType"],
      "rdfs:comment": ["Player type required—for example, Flash or Silverlight."],
      "http://schema.org/domain": [{"@id": "http://schema.org/MediaObject"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Text"}]
    },
    {
      "@id": "http://schema.org/regionsAllowed",
      "@type": ["rdf:Property"],
      "rdfs:label": ["regionsAllowed"],
      "rdfs:comment": ["The regions where the media is allowed. If not specified, then it's assumed to be allowed everywhere. Specify the countries in ISO 3166 format."],
      "http://schema.org/domain": [{"@id": "http://schema.org/MediaObject"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Place"}]
    },
    {
      "@id": "http://schema.org/requiresSubscription",
      "@type": ["rdf:Property"],
      "rdfs:label": ["requiresSubscription"],
      "rdfs:comment": ["Indicates if use of the media require a subscription  (either paid or free). Allowed values are yes or no."],
      "http://schema.org/domain": [{"@id": "http://schema.org/MediaObject"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Boolean"}]
    },
    {
      "@id": "http://schema.org/uploadDate",
      "@type": ["rdf:Property"],
      "rdfs:label": ["uploadDate"],
      "rdfs:comment": ["Date when this media object was uploaded to this site."],
      "http://schema.org/domain": [{"@id": "http://schema.org/MediaObject"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Date"}]
    },
    {
      "@id": "http://schema.org/width",
      "@type": ["rdf:Property"],
      "rdfs:label": ["width"],
      "rdfs:comment": ["The width of the media object."],
      "http://schema.org/domain": [{"@id": "http://schema.org/MediaObject"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Distance"}]
    },
    {
      "@id": "http://schema.org/carrierRequirements",
      "@type": ["rdf:Property"],
      "rdfs:label": ["carrierRequirements"],
      "rdfs:comment": ["Specifies specific carrier(s) requirements for the application (e.g. an application may only work on a specific carrier network)."],
      "http://schema.org/domain": [{"@id": "http://schema.org/MobileApplication"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Text"}]
    },
    {
      "@id": "http://schema.org/actor",
      "@type": ["rdf:Property"],
      "rdfs:label": ["actor"],
      "rdfs:comment": ["A cast member of the movie, TV series, season, or episode, or video."],
      "http://schema.org/domain": [
        {"@id": "http://schema.org/Movie"},
        {"@id": "http://schema.org/TVEpisode"},
        {"@id": "http://schema.org/TVSeries"}
      ],
      "http://schema.org/range": [{"@id": "http://schema.org/Person"}]
    },
    {
      "@id": "http://schema.org/actors",
      "@type": ["rdf:Property"],
      "rdfs:label": ["actors"],
      "rdfs:comment": ["A cast member of the movie, TV series, season, or episode, or video. (legacy spelling; see singular form, actor)"],
      "http://schema.org/domain": [
        {"@id": "http://schema.org/Movie"},
        {"@id": "http://schema.org/TVEpisode"},
        {"@id": "http://schema.org/TVSeries"}
      ],
      "http://schema.org/range": [{"@id": "http://schema.org/Person"}]
    },
    {
      "@id": "http://schema.org/director",
      "@type": ["rdf:Property"],
      "rdfs:label": ["director"],
      "rdfs:comment": ["The director of the movie, TV episode, or series."],
      "http://schema.org/domain": [
        {"@id": "http://schema.org/Movie"},
        {"@id": "http://schema.org/TVEpisode"},
        {"@id": "http://schema.org/TVSeries"}
      ],
      "http://schema.org/range": [{"@id": "http://schema.org/Person"}]
    },
    {
      "@id": "http://schema.org/musicBy",
      "@type": ["rdf:Property"],
      "rdfs:label": ["musicBy"],
      "rdfs:comment": ["The composer of the movie or TV soundtrack."],
      "http://schema.org/domain": [
        {"@id": "http://schema.org/Movie"},
        {"@id": "http://schema.org/TVEpisode"},
        {"@id": "http://schema.org/TVSeries"}
      ],
      "http://schema.org/range": [
        {"@id": "http://schema.org/Person"},
        {"@id": "http://schema.org/MusicGroup"}
      ]
    },
    {
      "@id": "http://schema.org/producer",
      "@type": ["rdf:Property"],
      "rdfs:label": ["producer"],
      "rdfs:comment": ["The producer of the movie, TV series, season, or episode, or video."],
      "http://schema.org/domain": [
        {"@id": "http://schema.org/Movie"},
        {"@id": "http://schema.org/TVEpisode"},
        {"@id": "http://schema.org/TVSeries"}
      ],
      "http://schema.org/range": [{"@id": "http://schema.org/Person"}]
    },
    {
      "@id": "http://schema.org/productionCompany",
      "@type": ["rdf:Property"],
      "rdfs:label": ["productionCompany"],
      "rdfs:comment": ["The production company or studio that made the movie, TV series, season, or episode, or video."],
      "http://schema.org/domain": [
        {"@id": "http://schema.org/Movie"},
        {"@id": "http://schema.org/TVEpisode"},
        {"@id": "http://schema.org/TVSeries"},
        {"@id": "http://schema.org/VideoObject"}
      ],
      "http://schema.org/range": [{"@id": "http://schema.org/Organization"}]
    },
    {
      "@id": "http://schema.org/trailer",
      "@type": ["rdf:Property"],
      "rdfs:label": ["trailer"],
      "rdfs:comment": ["The trailer of the movie or TV series, season, or episode."],
      "http://schema.org/domain": [
        {"@id": "http://schema.org/Movie"},
        {"@id": "http://schema.org/TVEpisode"},
        {"@id": "http://schema.org/TVSeason"},
        {"@id": "http://schema.org/TVSeries"}
      ],
      "http://schema.org/range": [{"@id": "http://schema.org/VideoObject"}]
    },
    {
      "@id": "http://schema.org/byArtist",
      "@type": ["rdf:Property"],
      "rdfs:label": ["byArtist"],
      "rdfs:comment": ["The artist that performed this album or recording."],
      "http://schema.org/domain": [
        {"@id": "http://schema.org/MusicAlbum"},
        {"@id": "http://schema.org/MusicRecording"}
      ],
      "http://schema.org/range": [{"@id": "http://schema.org/MusicGroup"}]
    },
    {
      "@id": "http://schema.org/album",
      "@type": ["rdf:Property"],
      "rdfs:label": ["album"],
      "rdfs:comment": ["A music album."],
      "http://schema.org/domain": [{"@id": "http://schema.org/MusicGroup"}],
      "http://schema.org/range": [{"@id": "http://schema.org/MusicAlbum"}]
    },
    {
      "@id": "http://schema.org/albums",
      "@type": ["rdf:Property"],
      "rdfs:label": ["albums"],
      "rdfs:comment": ["A collection of music albums (legacy spelling; see singular form, album)."],
      "http://schema.org/domain": [{"@id": "http://schema.org/MusicGroup"}],
      "http://schema.org/range": [{"@id": "http://schema.org/MusicAlbum"}]
    },
    {
      "@id": "http://schema.org/musicGroupMember",
      "@type": ["rdf:Property"],
      "rdfs:label": ["musicGroupMember"],
      "rdfs:comment": ["A member of the music group—for example, John, Paul, George, or Ringo."],
      "http://schema.org/domain": [{"@id": "http://schema.org/MusicGroup"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Person"}]
    },
    {
      "@id": "http://schema.org/track",
      "@type": ["rdf:Property"],
      "rdfs:label": ["track"],
      "rdfs:comment": ["A music recording (track)—usually a single song."],
      "http://schema.org/domain": [
        {"@id": "http://schema.org/MusicPlaylist"},
        {"@id": "http://schema.org/MusicGroup"}
      ],
      "http://schema.org/range": [{"@id": "http://schema.org/MusicRecording"}]
    },
    {
      "@id": "http://schema.org/tracks",
      "@type": ["rdf:Property"],
      "rdfs:label": ["tracks"],
      "rdfs:comment": ["A music recording (track)—usually a single song (legacy spelling; see singular form, track)."],
      "http://schema.org/domain": [
        {"@id": "http://schema.org/MusicPlaylist"},
        {"@id": "http://schema.org/MusicGroup"}
      ],
      "http://schema.org/range": [{"@id": "http://schema.org/MusicRecording"}]
    },
    {
      "@id": "http://schema.org/numTracks",
      "@type": ["rdf:Property"],
      "rdfs:label": ["numTracks"],
      "rdfs:comment": ["The number of tracks in this album or playlist."],
      "http://schema.org/domain": [{"@id": "http://schema.org/MusicPlaylist"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Integer"}]
    },
    {
      "@id": "http://schema.org/inAlbum",
      "@type": ["rdf:Property"],
      "rdfs:label": ["inAlbum"],
      "rdfs:comment": ["The album to which this recording belongs."],
      "http://schema.org/domain": [{"@id": "http://schema.org/MusicRecording"}],
      "http://schema.org/range": [{"@id": "http://schema.org/MusicAlbum"}]
    },
    {
      "@id": "http://schema.org/inPlaylist",
      "@type": ["rdf:Property"],
      "rdfs:label": ["inPlaylist"],
      "rdfs:comment": ["The playlist to which this recording belongs."],
      "http://schema.org/domain": [{"@id": "http://schema.org/MusicRecording"}],
      "http://schema.org/range": [{"@id": "http://schema.org/MusicPlaylist"}]
    },
    {
      "@id": "http://schema.org/dateline",
      "@type": ["rdf:Property"],
      "rdfs:label": ["dateline"],
      "rdfs:comment": ["The location where the NewsArticle was produced."],
      "http://schema.org/domain": [{"@id": "http://schema.org/NewsArticle"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Text"}]
    },
    {
      "@id": "http://schema.org/printColumn",
      "@type": ["rdf:Property"],
      "rdfs:label": ["printColumn"],
      "rdfs:comment": ["The number of the column in which the NewsArticle appears in the print edition."],
      "http://schema.org/domain": [{"@id": "http://schema.org/NewsArticle"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Text"}]
    },
    {
      "@id": "http://schema.org/printEdition",
      "@type": ["rdf:Property"],
      "rdfs:label": ["printEdition"],
      "rdfs:comment": ["The edition of the print product in which the NewsArticle appears."],
      "http://schema.org/domain": [{"@id": "http://schema.org/NewsArticle"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Text"}]
    },
    {
      "@id": "http://schema.org/printPage",
      "@type": ["rdf:Property"],
      "rdfs:label": ["printPage"],
      "rdfs:comment": ["If this NewsArticle appears in print, this field indicates the name of the page on which the article is found. Please note that this field is intended for the exact page name (e.g. A5, B18)."],
      "http://schema.org/domain": [{"@id": "http://schema.org/NewsArticle"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Text"}]
    },
    {
      "@id": "http://schema.org/printSection",
      "@type": ["rdf:Property"],
      "rdfs:label": ["printSection"],
      "rdfs:comment": ["If this NewsArticle appears in print, this field indicates the print section in which the article appeared."],
      "http://schema.org/domain": [{"@id": "http://schema.org/NewsArticle"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Text"}]
    },
    {
      "@id": "http://schema.org/calories",
      "@type": ["rdf:Property"],
      "rdfs:label": ["calories"],
      "rdfs:comment": ["The number of calories"],
      "http://schema.org/domain": [{"@id": "http://schema.org/NutritionInformation"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Energy"}]
    },
    {
      "@id": "http://schema.org/carbohydrateContent",
      "@type": ["rdf:Property"],
      "rdfs:label": ["carbohydrateContent"],
      "rdfs:comment": ["The number of grams of carbohydrates."],
      "http://schema.org/domain": [{"@id": "http://schema.org/NutritionInformation"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Mass"}]
    },
    {
      "@id": "http://schema.org/cholesterolContent",
      "@type": ["rdf:Property"],
      "rdfs:label": ["cholesterolContent"],
      "rdfs:comment": ["The number of milligrams of cholesterol."],
      "http://schema.org/domain": [{"@id": "http://schema.org/NutritionInformation"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Mass"}]
    },
    {
      "@id": "http://schema.org/fatContent",
      "@type": ["rdf:Property"],
      "rdfs:label": ["fatContent"],
      "rdfs:comment": ["The number of grams of fat."],
      "http://schema.org/domain": [{"@id": "http://schema.org/NutritionInformation"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Mass"}]
    },
    {
      "@id": "http://schema.org/fiberContent",
      "@type": ["rdf:Property"],
      "rdfs:label": ["fiberContent"],
      "rdfs:comment": ["The number of grams of fiber."],
      "http://schema.org/domain": [{"@id": "http://schema.org/NutritionInformation"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Mass"}]
    },
    {
      "@id": "http://schema.org/proteinContent",
      "@type": ["rdf:Property"],
      "rdfs:label": ["proteinContent"],
      "rdfs:comment": ["The number of grams of protein."],
      "http://schema.org/domain": [{"@id": "http://schema.org/NutritionInformation"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Mass"}]
    },
    {
      "@id": "http://schema.org/saturatedFatContent",
      "@type": ["rdf:Property"],
      "rdfs:label": ["saturatedFatContent"],
      "rdfs:comment": ["The number of grams of saturated fat."],
      "http://schema.org/domain": [{"@id": "http://schema.org/NutritionInformation"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Mass"}]
    },
    {
      "@id": "http://schema.org/servingSize",
      "@type": ["rdf:Property"],
      "rdfs:label": ["servingSize"],
      "rdfs:comment": ["The serving size, in terms of the number of volume or mass"],
      "http://schema.org/domain": [{"@id": "http://schema.org/NutritionInformation"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Text"}]
    },
    {
      "@id": "http://schema.org/sodiumContent",
      "@type": ["rdf:Property"],
      "rdfs:label": ["sodiumContent"],
      "rdfs:comment": ["The number of milligrams of sodium."],
      "http://schema.org/domain": [{"@id": "http://schema.org/NutritionInformation"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Mass"}]
    },
    {
      "@id": "http://schema.org/sugarContent",
      "@type": ["rdf:Property"],
      "rdfs:label": ["sugarContent"],
      "rdfs:comment": ["The number of grams of sugar."],
      "http://schema.org/domain": [{"@id": "http://schema.org/NutritionInformation"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Mass"}]
    },
    {
      "@id": "http://schema.org/transFatContent",
      "@type": ["rdf:Property"],
      "rdfs:label": ["transFatContent"],
      "rdfs:comment": ["The number of grams of trans fat."],
      "http://schema.org/domain": [{"@id": "http://schema.org/NutritionInformation"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Mass"}]
    },
    {
      "@id": "http://schema.org/unsaturatedFatContent",
      "@type": ["rdf:Property"],
      "rdfs:label": ["unsaturatedFatContent"],
      "rdfs:comment": ["The number of grams of unsaturated fat."],
      "http://schema.org/domain": [{"@id": "http://schema.org/NutritionInformation"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Mass"}]
    },
    {
      "@id": "http://schema.org/availability",
      "@type": ["rdf:Property"],
      "rdfs:label": ["availability"],
      "rdfs:comment": ["The availability of this item—for example In stock, Out of stock, Pre-order, etc."],
      "http://schema.org/domain": [{"@id": "http://schema.org/Offer"}],
      "http://schema.org/range": [{"@id": "http://schema.org/ItemAvailability"}]
    },
    {
      "@id": "http://schema.org/itemCondition",
      "@type": ["rdf:Property"],
      "rdfs:label": ["itemCondition"],
      "rdfs:comment": ["The condition of the item for sale—for example New, Refurbished, Used, etc."],
      "http://schema.org/domain": [{"@id": "http://schema.org/Offer"}],
      "http://schema.org/range": [{"@id": "http://schema.org/OfferItemCondition"}]
    },
    {
      "@id": "http://schema.org/itemOffered",
      "@type": ["rdf:Property"],
      "rdfs:label": ["itemOffered"],
      "rdfs:comment": ["The item being sold."],
      "http://schema.org/domain": [{"@id": "http://schema.org/Offer"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Product"}]
    },
    {
      "@id": "http://schema.org/price",
      "@type": ["rdf:Property"],
      "rdfs:label": ["price"],
      "rdfs:comment": ["The offer price of the product."],
      "http://schema.org/domain": [{"@id": "http://schema.org/Offer"}],
      "http://schema.org/range": [
        {"@id": "http://schema.org/Number"},
        {"@id": "http://schema.org/Text"}
      ]
    },
    {
      "@id": "http://schema.org/priceCurrency",
      "@type": ["rdf:Property"],
      "rdfs:label": ["priceCurrency"],
      "rdfs:comment": ["The currency (in 3-letter ISO 4217 format) of the offer price."],
      "http://schema.org/domain": [{"@id": "http://schema.org/Offer"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Text"}]
    },
    {
      "@id": "http://schema.org/priceValidUntil",
      "@type": ["rdf:Property"],
      "rdfs:label": ["priceValidUntil"],
      "rdfs:comment": ["The date after which the price is no longer available."],
      "http://schema.org/domain": [{"@id": "http://schema.org/Offer"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Date"}]
    },
    {
      "@id": "http://schema.org/seller",
      "@type": ["rdf:Property"],
      "rdfs:label": ["seller"],
      "rdfs:comment": ["The seller of the product."],
      "http://schema.org/domain": [{"@id": "http://schema.org/Offer"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Organization"}]
    },
    {
      "@id": "http://schema.org/address",
      "@type": ["rdf:Property"],
      "rdfs:label": ["address"],
      "rdfs:comment": ["Physical address of the item."],
      "http://schema.org/domain": [
        {"@id": "http://schema.org/Organization"},
        {"@id": "http://schema.org/Place"},
        {"@id": "http://schema.org/Person"}
      ],
      "http://schema.org/range": [{"@id": "http://schema.org/PostalAddress"}]
    },
    {
      "@id": "http://schema.org/contactPoint",
      "@type": ["rdf:Property"],
      "rdfs:label": ["contactPoint"],
      "rdfs:comment": ["A contact point for a person or organization."],
      "http://schema.org/domain": [
        {"@id": "http://schema.org/Organization"},
        {"@id": "http://schema.org/Person"}
      ],
      "http://schema.org/range": [{"@id": "http://schema.org/ContactPoint"}]
    },
    {
      "@id": "http://schema.org/contactPoints",
      "@type": ["rdf:Property"],
      "rdfs:label": ["contactPoints"],
      "rdfs:comment": ["A contact point for a person or organization (legacy spelling; see singular form, contactPoint)."],
      "http://schema.org/domain": [
        {"@id": "http://schema.org/Organization"},
        {"@id": "http://schema.org/Person"}
      ],
      "http://schema.org/range": [{"@id": "http://schema.org/ContactPoint"}]
    },
    {
      "@id": "http://schema.org/employee",
      "@type": ["rdf:Property"],
      "rdfs:label": ["employee"],
      "rdfs:comment": ["Someone working for this organization."],
      "http://schema.org/domain": [{"@id": "http://schema.org/Organization"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Person"}]
    },
    {
      "@id": "http://schema.org/employees",
      "@type": ["rdf:Property"],
      "rdfs:label": ["employees"],
      "rdfs:comment": ["People working for this organization. (legacy spelling; see singular form, employee)"],
      "http://schema.org/domain": [{"@id": "http://schema.org/Organization"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Person"}]
    },
    {
      "@id": "http://schema.org/event",
      "@type": ["rdf:Property"],
      "rdfs:label": ["event"],
      "rdfs:comment": ["Upcoming or past event associated with this place or organization."],
      "http://schema.org/domain": [
        {"@id": "http://schema.org/Organization"},
        {"@id": "http://schema.org/Place"}
      ],
      "http://schema.org/range": [{"@id": "http://schema.org/Event"}]
    },
    {
      "@id": "http://schema.org/events",
      "@type": ["rdf:Property"],
      "rdfs:label": ["events"],
      "rdfs:comment": ["Upcoming or past events associated with this place or organization (legacy spelling; see singular form, event)."],
      "http://schema.org/domain": [
        {"@id": "http://schema.org/Organization"},
        {"@id": "http://schema.org/Place"}
      ],
      "http://schema.org/range": [{"@id": "http://schema.org/Event"}]
    },
    {
      "@id": "http://schema.org/founder",
      "@type": ["rdf:Property"],
      "rdfs:label": ["founder"],
      "rdfs:comment": ["A person who founded this organization."],
      "http://schema.org/domain": [{"@id": "http://schema.org/Organization"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Person"}]
    },
    {
      "@id": "http://schema.org/founders",
      "@type": ["rdf:Property"],
      "rdfs:label": ["founders"],
      "rdfs:comment": ["A person who founded this organization (legacy spelling; see singular form, founder)."],
      "http://schema.org/domain": [{"@id": "http://schema.org/Organization"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Person"}]
    },
    {
      "@id": "http://schema.org/foundingDate",
      "@type": ["rdf:Property"],
      "rdfs:label": ["foundingDate"],
      "rdfs:comment": ["The date that this organization was founded."],
      "http://schema.org/domain": [{"@id": "http://schema.org/Organization"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Date"}]
    },
    {
      "@id": "http://schema.org/member",
      "@type": ["rdf:Property"],
      "rdfs:label": ["member"],
      "rdfs:comment": ["A member of this organization."],
      "http://schema.org/domain": [{"@id": "http://schema.org/Organization"}],
      "http://schema.org/range": [
        {"@id": "http://schema.org/Person"},
        {"@id": "http://schema.org/Organization"}
      ]
    },
    {
      "@id": "http://schema.org/members",
      "@type": ["rdf:Property"],
      "rdfs:label": ["members"],
      "rdfs:comment": ["A member of this organization (legacy spelling; see singular form, member)."],
      "http://schema.org/domain": [{"@id": "http://schema.org/Organization"}],
      "http://schema.org/range": [
        {"@id": "http://schema.org/Person"},
        {"@id": "http://schema.org/Organization"}
      ]
    },
    {
      "@id": "http://schema.org/additionalName",
      "@type": ["rdf:Property"],
      "rdfs:label": ["additionalName"],
      "rdfs:comment": ["An additional name for a Person, can be used for a middle name."],
      "http://schema.org/domain": [{"@id": "http://schema.org/Person"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Text"}]
    },
    {
      "@id": "http://schema.org/affiliation",
      "@type": ["rdf:Property"],
      "rdfs:label": ["affiliation"],
      "rdfs:comment": ["An organization that this person is affiliated with. For example, a school/university, a club, or a team."],
      "http://schema.org/domain": [{"@id": "http://schema.org/Person"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Organization"}]
    },
    {
      "@id": "http://schema.org/alumniOf",
      "@type": ["rdf:Property"],
      "rdfs:label": ["alumniOf"],
      "rdfs:comment": ["An educational organizations that the person is an alumni of."],
      "http://schema.org/domain": [{"@id": "http://schema.org/Person"}],
      "http://schema.org/range": [{"@id": "http://schema.org/EducationalOrganization"}]
    },
    {
      "@id": "http://schema.org/birthDate",
      "@type": ["rdf:Property"],
      "rdfs:label": ["birthDate"],
      "rdfs:comment": ["Date of birth."],
      "http://schema.org/domain": [{"@id": "http://schema.org/Person"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Date"}]
    },
    {
      "@id": "http://schema.org/children",
      "@type": ["rdf:Property"],
      "rdfs:label": ["children"],
      "rdfs:comment": ["A child of the person."],
      "http://schema.org/domain": [{"@id": "http://schema.org/Person"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Person"}]
    },
    {
      "@id": "http://schema.org/colleague",
      "@type": ["rdf:Property"],
      "rdfs:label": ["colleague"],
      "rdfs:comment": ["A colleague of the person."],
      "http://schema.org/domain": [{"@id": "http://schema.org/Person"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Person"}]
    },
    {
      "@id": "http://schema.org/colleagues",
      "@type": ["rdf:Property"],
      "rdfs:label": ["colleagues"],
      "rdfs:comment": ["A colleague of the person (legacy spelling; see singular form, colleague)."],
      "http://schema.org/domain": [{"@id": "http://schema.org/Person"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Person"}]
    },
    {
      "@id": "http://schema.org/deathDate",
      "@type": ["rdf:Property"],
      "rdfs:label": ["deathDate"],
      "rdfs:comment": ["Date of death."],
      "http://schema.org/domain": [{"@id": "http://schema.org/Person"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Date"}]
    },
    {
      "@id": "http://schema.org/familyName",
      "@type": ["rdf:Property"],
      "rdfs:label": ["familyName"],
      "rdfs:comment": ["Family name. In the U.S., the last name of an Person. This can be used along with givenName instead of the Name property."],
      "http://schema.org/domain": [{"@id": "http://schema.org/Person"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Text"}]
    },
    {
      "@id": "http://schema.org/follows",
      "@type": ["rdf:Property"],
      "rdfs:label": ["follows"],
      "rdfs:comment": ["The most generic uni-directional social relation."],
      "http://schema.org/domain": [{"@id": "http://schema.org/Person"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Person"}]
    },
    {
      "@id": "http://schema.org/gender",
      "@type": ["rdf:Property"],
      "rdfs:label": ["gender"],
      "rdfs:comment": ["Gender of the person."],
      "http://schema.org/domain": [{"@id": "http://schema.org/Person"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Text"}]
    },
    {
      "@id": "http://schema.org/givenName",
      "@type": ["rdf:Property"],
      "rdfs:label": ["givenName"],
      "rdfs:comment": ["Given name. In the U.S., the first name of a Person. This can be used along with familyName instead of the Name property."],
      "http://schema.org/domain": [{"@id": "http://schema.org/Person"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Text"}]
    },
    {
      "@id": "http://schema.org/homeLocation",
      "@type": ["rdf:Property"],
      "rdfs:label": ["homeLocation"],
      "rdfs:comment": ["A contact location for a person's residence."],
      "http://schema.org/domain": [{"@id": "http://schema.org/Person"}],
      "http://schema.org/range": [
        {"@id": "http://schema.org/Place"},
        {"@id": "http://schema.org/ContactPoint"}
      ]
    },
    {
      "@id": "http://schema.org/honorificPrefix",
      "@type": ["rdf:Property"],
      "rdfs:label": ["honorificPrefix"],
      "rdfs:comment": ["An honorific prefix preceding a Person's name such as Dr/Mrs/Mr."],
      "http://schema.org/domain": [{"@id": "http://schema.org/Person"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Text"}]
    },
    {
      "@id": "http://schema.org/honorificSuffix",
      "@type": ["rdf:Property"],
      "rdfs:label": ["honorificSuffix"],
      "rdfs:comment": ["An honorific suffix preceding a Person's name such as M.D. /PhD/MSCSW."],
      "http://schema.org/domain": [{"@id": "http://schema.org/Person"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Text"}]
    },
    {
      "@id": "http://schema.org/jobTitle",
      "@type": ["rdf:Property"],
      "rdfs:label": ["jobTitle"],
      "rdfs:comment": ["The job title of the person (for example, Financial Manager)."],
      "http://schema.org/domain": [{"@id": "http://schema.org/Person"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Text"}]
    },
    {
      "@id": "http://schema.org/knows",
      "@type": ["rdf:Property"],
      "rdfs:label": ["knows"],
      "rdfs:comment": ["The most generic bi-directional social/work relation."],
      "http://schema.org/domain": [{"@id": "http://schema.org/Person"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Person"}]
    },
    {
      "@id": "http://schema.org/memberOf",
      "@type": ["rdf:Property"],
      "rdfs:label": ["memberOf"],
      "rdfs:comment": ["An organization to which the person belongs."],
      "http://schema.org/domain": [{"@id": "http://schema.org/Person"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Organization"}]
    },
    {
      "@id": "http://schema.org/nationality",
      "@type": ["rdf:Property"],
      "rdfs:label": ["nationality"],
      "rdfs:comment": ["Nationality of the person."],
      "http://schema.org/domain": [{"@id": "http://schema.org/Person"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Country"}]
    },
    {
      "@id": "http://schema.org/parent",
      "@type": ["rdf:Property"],
      "rdfs:label": ["parent"],
      "rdfs:comment": ["A parent of this person."],
      "http://schema.org/domain": [{"@id": "http://schema.org/Person"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Person"}]
    },
    {
      "@id": "http://schema.org/parents",
      "@type": ["rdf:Property"],
      "rdfs:label": ["parents"],
      "rdfs:comment": ["A parents of the person (legacy spelling; see singular form, parent)."],
      "http://schema.org/domain": [{"@id": "http://schema.org/Person"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Person"}]
    },
    {
      "@id": "http://schema.org/performerIn",
      "@type": ["rdf:Property"],
      "rdfs:label": ["performerIn"],
      "rdfs:comment": ["Event that this person is a performer or participant in."],
      "http://schema.org/domain": [{"@id": "http://schema.org/Person"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Event"}]
    },
    {
      "@id": "http://schema.org/relatedTo",
      "@type": ["rdf:Property"],
      "rdfs:label": ["relatedTo"],
      "rdfs:comment": ["The most generic familial relation."],
      "http://schema.org/domain": [{"@id": "http://schema.org/Person"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Person"}]
    },
    {
      "@id": "http://schema.org/sibling",
      "@type": ["rdf:Property"],
      "rdfs:label": ["sibling"],
      "rdfs:comment": ["A sibling of the person."],
      "http://schema.org/domain": [{"@id": "http://schema.org/Person"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Person"}]
    },
    {
      "@id": "http://schema.org/siblings",
      "@type": ["rdf:Property"],
      "rdfs:label": ["siblings"],
      "rdfs:comment": ["A sibling of the person (legacy spelling; see singular form, sibling)."],
      "http://schema.org/domain": [{"@id": "http://schema.org/Person"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Person"}]
    },
    {
      "@id": "http://schema.org/spouse",
      "@type": ["rdf:Property"],
      "rdfs:label": ["spouse"],
      "rdfs:comment": ["The person's spouse."],
      "http://schema.org/domain": [{"@id": "http://schema.org/Person"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Person"}]
    },
    {
      "@id": "http://schema.org/workLocation",
      "@type": ["rdf:Property"],
      "rdfs:label": ["workLocation"],
      "rdfs:comment": ["A contact location for a person's place of work."],
      "http://schema.org/domain": [{"@id": "http://schema.org/Person"}],
      "http://schema.org/range": [
        {"@id": "http://schema.org/Place"},
        {"@id": "http://schema.org/ContactPoint"}
      ]
    },
    {
      "@id": "http://schema.org/worksFor",
      "@type": ["rdf:Property"],
      "rdfs:label": ["worksFor"],
      "rdfs:comment": ["Organizations that the person works for."],
      "http://schema.org/domain": [{"@id": "http://schema.org/Person"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Organization"}]
    },
    {
      "@id": "http://schema.org/containedIn",
      "@type": ["rdf:Property"],
      "rdfs:label": ["containedIn"],
      "rdfs:comment": ["The basic containment relation between places."],
      "http://schema.org/domain": [{"@id": "http://schema.org/Place"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Place"}]
    },
    {
      "@id": "http://schema.org/geo",
      "@type": ["rdf:Property"],
      "rdfs:label": ["geo"],
      "rdfs:comment": ["The geo coordinates of the place."],
      "http://schema.org/domain": [{"@id": "http://schema.org/Place"}],
      "http://schema.org/range": [
        {"@id": "http://schema.org/GeoCoordinates"},
        {"@id": "http://schema.org/GeoShape"}
      ]
    },
    {
      "@id": "http://schema.org/map",
      "@type": ["rdf:Property"],
      "rdfs:label": ["map"],
      "rdfs:comment": ["A URL to a map of the place."],
      "http://schema.org/domain": [{"@id": "http://schema.org/Place"}],
      "http://schema.org/range": [{"@id": "http://schema.org/URL"}]
    },
    {
      "@id": "http://schema.org/maps",
      "@type": ["rdf:Property"],
      "rdfs:label": ["maps"],
      "rdfs:comment": ["A URL to a map of the place (legacy spelling; see singular form, map)."],
      "http://schema.org/domain": [{"@id": "http://schema.org/Place"}],
      "http://schema.org/range": [{"@id": "http://schema.org/URL"}]
    },
    {
      "@id": "http://schema.org/photo",
      "@type": ["rdf:Property"],
      "rdfs:label": ["photo"],
      "rdfs:comment": ["A photograph of this place."],
      "http://schema.org/domain": [{"@id": "http://schema.org/Place"}],
      "http://schema.org/range": [
        {"@id": "http://schema.org/Photograph"},
        {"@id": "http://schema.org/ImageObject"}
      ]
    },
    {
      "@id": "http://schema.org/photos",
      "@type": ["rdf:Property"],
      "rdfs:label": ["photos"],
      "rdfs:comment": ["Photographs of this place (legacy spelling; see singular form, photo)."],
      "http://schema.org/domain": [{"@id": "http://schema.org/Place"}],
      "http://schema.org/range": [
        {"@id": "http://schema.org/Photograph"},
        {"@id": "http://schema.org/ImageObject"}
      ]
    },
    {
      "@id": "http://schema.org/addressCountry",
      "@type": ["rdf:Property"],
      "rdfs:label": ["addressCountry"],
      "rdfs:comment": ["The country. For example, USA. You can also provide the two-letter ISO 3166-1 alpha-2 country code."],
      "http://schema.org/domain": [{"@id": "http://schema.org/PostalAddress"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Country"}]
    },
    {
      "@id": "http://schema.org/addressLocality",
      "@type": ["rdf:Property"],
      "rdfs:label": ["addressLocality"],
      "rdfs:comment": ["The locality. For example, Mountain View."],
      "http://schema.org/domain": [{"@id": "http://schema.org/PostalAddress"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Text"}]
    },
    {
      "@id": "http://schema.org/addressRegion",
      "@type": ["rdf:Property"],
      "rdfs:label": ["addressRegion"],
      "rdfs:comment": ["The region. For example, CA."],
      "http://schema.org/domain": [{"@id": "http://schema.org/PostalAddress"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Text"}]
    },
    {
      "@id": "http://schema.org/postOfficeBoxNumber",
      "@type": ["rdf:Property"],
      "rdfs:label": ["postOfficeBoxNumber"],
      "rdfs:comment": ["The post offce box number for PO box addresses."],
      "http://schema.org/domain": [{"@id": "http://schema.org/PostalAddress"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Text"}]
    },
    {
      "@id": "http://schema.org/postalCode",
      "@type": ["rdf:Property"],
      "rdfs:label": ["postalCode"],
      "rdfs:comment": ["The postal code. For example, 94043."],
      "http://schema.org/domain": [{"@id": "http://schema.org/PostalAddress"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Text"}]
    },
    {
      "@id": "http://schema.org/streetAddress",
      "@type": ["rdf:Property"],
      "rdfs:label": ["streetAddress"],
      "rdfs:comment": ["The street address. For example, 1600 Amphitheatre Pkwy."],
      "http://schema.org/domain": [{"@id": "http://schema.org/PostalAddress"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Text"}]
    },
    {
      "@id": "http://schema.org/brand",
      "@type": ["rdf:Property"],
      "rdfs:label": ["brand"],
      "rdfs:comment": ["The brand of the product."],
      "http://schema.org/domain": [{"@id": "http://schema.org/Product"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Organization"}]
    },
    {
      "@id": "http://schema.org/manufacturer",
      "@type": ["rdf:Property"],
      "rdfs:label": ["manufacturer"],
      "rdfs:comment": ["The manufacturer of the product."],
      "http://schema.org/domain": [{"@id": "http://schema.org/Product"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Organization"}]
    },
    {
      "@id": "http://schema.org/model",
      "@type": ["rdf:Property"],
      "rdfs:label": ["model"],
      "rdfs:comment": ["The model of the product."],
      "http://schema.org/domain": [{"@id": "http://schema.org/Product"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Text"}]
    },
    {
      "@id": "http://schema.org/productID",
      "@type": ["rdf:Property"],
      "rdfs:label": ["productID"],
      "rdfs:comment": ["The product identifier, such as ISBN. For example: <meta itemprop='productID' content='isbn:123-456-789'/>."],
      "http://schema.org/domain": [{"@id": "http://schema.org/Product"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Text"}]
    },
    {
      "@id": "http://schema.org/bestRating",
      "@type": ["rdf:Property"],
      "rdfs:label": ["bestRating"],
      "rdfs:comment": ["The highest value allowed in this rating system. If bestRating is omitted, 5 is assumed."],
      "http://schema.org/domain": [{"@id": "http://schema.org/Rating"}],
      "http://schema.org/range": [
        {"@id": "http://schema.org/Number"},
        {"@id": "http://schema.org/Text"}
      ]
    },
    {
      "@id": "http://schema.org/ratingValue",
      "@type": ["rdf:Property"],
      "rdfs:label": ["ratingValue"],
      "rdfs:comment": ["The rating for the content."],
      "http://schema.org/domain": [{"@id": "http://schema.org/Rating"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Text"}]
    },
    {
      "@id": "http://schema.org/worstRating",
      "@type": ["rdf:Property"],
      "rdfs:label": ["worstRating"],
      "rdfs:comment": ["The lowest value allowed in this rating system. If worstRating is omitted, 1 is assumed."],
      "http://schema.org/domain": [{"@id": "http://schema.org/Rating"}],
      "http://schema.org/range": [
        {"@id": "http://schema.org/Number"},
        {"@id": "http://schema.org/Text"}
      ]
    },
    {
      "@id": "http://schema.org/cookTime",
      "@type": ["rdf:Property"],
      "rdfs:label": ["cookTime"],
      "rdfs:comment": ["The time it takes to actually cook the dish, in ISO 8601 duration format."],
      "http://schema.org/domain": [{"@id": "http://schema.org/Recipe"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Duration"}]
    },
    {
      "@id": "http://schema.org/cookingMethod",
      "@type": ["rdf:Property"],
      "rdfs:label": ["cookingMethod"],
      "rdfs:comment": ["The method of cooking, such as Frying, Steaming, ..."],
      "http://schema.org/domain": [{"@id": "http://schema.org/Recipe"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Text"}]
    },
    {
      "@id": "http://schema.org/ingredients",
      "@type": ["rdf:Property"],
      "rdfs:label": ["ingredients"],
      "rdfs:comment": ["An ingredient used in the recipe."],
      "http://schema.org/domain": [{"@id": "http://schema.org/Recipe"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Text"}]
    },
    {
      "@id": "http://schema.org/nutrition",
      "@type": ["rdf:Property"],
      "rdfs:label": ["nutrition"],
      "rdfs:comment": ["Nutrition information about the recipe."],
      "http://schema.org/domain": [{"@id": "http://schema.org/Recipe"}],
      "http://schema.org/range": [{"@id": "http://schema.org/NutritionInformation"}]
    },
    {
      "@id": "http://schema.org/prepTime",
      "@type": ["rdf:Property"],
      "rdfs:label": ["prepTime"],
      "rdfs:comment": ["The length of time it takes to prepare the recipe, in ISO 8601 duration format."],
      "http://schema.org/domain": [{"@id": "http://schema.org/Recipe"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Duration"}]
    },
    {
      "@id": "http://schema.org/recipeCategory",
      "@type": ["rdf:Property"],
      "rdfs:label": ["recipeCategory"],
      "rdfs:comment": ["The category of the recipe—for example, appetizer, entree, etc."],
      "http://schema.org/domain": [{"@id": "http://schema.org/Recipe"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Text"}]
    },
    {
      "@id": "http://schema.org/recipeCuisine",
      "@type": ["rdf:Property"],
      "rdfs:label": ["recipeCuisine"],
      "rdfs:comment": ["The cuisine of the recipe (for example, French or Ethopian)."],
      "http://schema.org/domain": [{"@id": "http://schema.org/Recipe"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Text"}]
    },
    {
      "@id": "http://schema.org/recipeInstructions",
      "@type": ["rdf:Property"],
      "rdfs:label": ["recipeInstructions"],
      "rdfs:comment": ["The steps to make the dish."],
      "http://schema.org/domain": [{"@id": "http://schema.org/Recipe"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Text"}]
    },
    {
      "@id": "http://schema.org/recipeYield",
      "@type": ["rdf:Property"],
      "rdfs:label": ["recipeYield"],
      "rdfs:comment": ["The quantity produced by the recipe (for example, number of people served, number of servings, etc)."],
      "http://schema.org/domain": [{"@id": "http://schema.org/Recipe"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Text"}]
    },
    {
      "@id": "http://schema.org/totalTime",
      "@type": ["rdf:Property"],
      "rdfs:label": ["totalTime"],
      "rdfs:comment": ["The total time it takes to prepare and cook the recipe, in ISO 8601 duration format."],
      "http://schema.org/domain": [{"@id": "http://schema.org/Recipe"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Duration"}]
    },
    {
      "@id": "http://schema.org/reviewBody",
      "@type": ["rdf:Property"],
      "rdfs:label": ["reviewBody"],
      "rdfs:comment": ["The actual body of the review"],
      "http://schema.org/domain": [{"@id": "http://schema.org/Review"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Text"}]
    },
    {
      "@id": "http://schema.org/reviewRating",
      "@type": ["rdf:Property"],
      "rdfs:label": ["reviewRating"],
      "rdfs:comment": ["The rating given in this review. Note that reviews can themselves be rated. The reviewRating applies to rating given by the review. The aggregateRating property applies to the review itself, as a creative work."],
      "http://schema.org/domain": [{"@id": "http://schema.org/Review"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Rating"}]
    },
    {
      "@id": "http://schema.org/applicationCategory",
      "@type": ["rdf:Property"],
      "rdfs:label": ["applicationCategory"],
      "rdfs:comment": ["Type of software application, e.g. \"Game, Multimedia\"."],
      "http://schema.org/domain": [{"@id": "http://schema.org/SoftwareApplication"}],
      "http://schema.org/range": [
        {"@id": "http://schema.org/Text"},
        {"@id": "http://schema.org/URL"}
      ]
    },
    {
      "@id": "http://schema.org/applicationSubCategory",
      "@type": ["rdf:Property"],
      "rdfs:label": ["applicationSubCategory"],
      "rdfs:comment": ["Subcategory of the application, e.g. \"Arcade Game\"."],
      "http://schema.org/domain": [{"@id": "http://schema.org/SoftwareApplication"}],
      "http://schema.org/range": [
        {"@id": "http://schema.org/Text"},
        {"@id": "http://schema.org/URL"}
      ]
    },
    {
      "@id": "http://schema.org/applicationSuite",
      "@type": ["rdf:Property"],
      "rdfs:label": ["applicationSuite"],
      "rdfs:comment": ["The name of the application suite to which the application belongs (e.g. Excel belongs to Office)"],
      "http://schema.org/domain": [{"@id": "http://schema.org/SoftwareApplication"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Text"}]
    },
    {
      "@id": "http://schema.org/countriesNotSupported",
      "@type": ["rdf:Property"],
      "rdfs:label": ["countriesNotSupported"],
      "rdfs:comment": ["Countries for which the application is not supported. You can also provide the two-letter ISO 3166-1 alpha-2 country code."],
      "http://schema.org/domain": [{"@id": "http://schema.org/SoftwareApplication"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Text"}]
    },
    {
      "@id": "http://schema.org/countriesSupported",
      "@type": ["rdf:Property"],
      "rdfs:label": ["countriesSupported"],
      "rdfs:comment": ["Countries for which the application is supported. You can also provide the two-letter ISO 3166-1 alpha-2 country code."],
      "http://schema.org/domain": [{"@id": "http://schema.org/SoftwareApplication"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Text"}]
    },
    {
      "@id": "http://schema.org/device",
      "@type": ["rdf:Property"],
      "rdfs:label": ["device"],
      "rdfs:comment": ["Device required to run the application. Used in cases where a specific make/model is required to run the application."],
      "http://schema.org/domain": [{"@id": "http://schema.org/SoftwareApplication"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Text"}]
    },
    {
      "@id": "http://schema.org/downloadUrl",
      "@type": ["rdf:Property"],
      "rdfs:label": ["downloadUrl"],
      "rdfs:comment": ["If the file can be downloaded, URL to download the binary."],
      "http://schema.org/domain": [{"@id": "http://schema.org/SoftwareApplication"}],
      "http://schema.org/range": [{"@id": "http://schema.org/URL"}]
    },
    {
      "@id": "http://schema.org/featureList",
      "@type": ["rdf:Property"],
      "rdfs:label": ["featureList"],
      "rdfs:comment": ["Features or modules provided by this application (and possibly required by other applications)."],
      "http://schema.org/domain": [{"@id": "http://schema.org/SoftwareApplication"}],
      "http://schema.org/range": [
        {"@id": "http://schema.org/URL"},
        {"@id": "http://schema.org/Text"}
      ]
    },
    {
      "@id": "http://schema.org/fileFormat",
      "@type": ["rdf:Property"],
      "rdfs:label": ["fileFormat"],
      "rdfs:comment": ["MIME format of the binary (e.g. application/zip)."],
      "http://schema.org/domain": [{"@id": "http://schema.org/SoftwareApplication"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Text"}]
    },
    {
      "@id": "http://schema.org/fileSize",
      "@type": ["rdf:Property"],
      "rdfs:label": ["fileSize"],
      "rdfs:comment": ["Size of the application / package (e.g. 18MB). In the absence of a unit (MB, KB etc.), KB will be assumed."],
      "http://schema.org/domain": [{"@id": "http://schema.org/SoftwareApplication"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Integer"}]
    },
    {
      "@id": "http://schema.org/installUrl",
      "@type": ["rdf:Property"],
      "rdfs:label": ["installUrl"],
      "rdfs:comment": ["URL at which the app may be installed, if different from the URL of the item."],
      "http://schema.org/domain": [{"@id": "http://schema.org/SoftwareApplication"}],
      "http://schema.org/range": [{"@id": "http://schema.org/URL"}]
    },
    {
      "@id": "http://schema.org/memoryRequirements",
      "@type": ["rdf:Property"],
      "rdfs:label": ["memoryRequirements"],
      "rdfs:comment": ["Minimum memory requirements."],
      "http://schema.org/domain": [{"@id": "http://schema.org/SoftwareApplication"}],
      "http://schema.org/range": [
        {"@id": "http://schema.org/URL"},
        {"@id": "http://schema.org/Text"}
      ]
    },
    {
      "@id": "http://schema.org/operatingSystem",
      "@type": ["rdf:Property"],
      "rdfs:label": ["operatingSystem"],
      "rdfs:comment": ["Operating systems supported (Windows 7, OSX 10.6, Android 1.6)."],
      "http://schema.org/domain": [{"@id": "http://schema.org/SoftwareApplication"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Text"}]
    },
    {
      "@id": "http://schema.org/permissions",
      "@type": ["rdf:Property"],
      "rdfs:label": ["permissions"],
      "rdfs:comment": ["Permission(s) required to run the app (for example, a mobile app may require full internet access or may run only on wifi)."],
      "http://schema.org/domain": [{"@id": "http://schema.org/SoftwareApplication"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Text"}]
    },
    {
      "@id": "http://schema.org/processorRequirements",
      "@type": ["rdf:Property"],
      "rdfs:label": ["processorRequirements"],
      "rdfs:comment": ["Processor architecture required to run the application (e.g. IA64)."],
      "http://schema.org/domain": [{"@id": "http://schema.org/SoftwareApplication"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Text"}]
    },
    {
      "@id": "http://schema.org/releaseNotes",
      "@type": ["rdf:Property"],
      "rdfs:label": ["releaseNotes"],
      "rdfs:comment": ["Description of what changed in this version."],
      "http://schema.org/domain": [{"@id": "http://schema.org/SoftwareApplication"}],
      "http://schema.org/range": [
        {"@id": "http://schema.org/URL"},
        {"@id": "http://schema.org/Text"}
      ]
    },
    {
      "@id": "http://schema.org/requirements",
      "@type": ["rdf:Property"],
      "rdfs:label": ["requirements"],
      "rdfs:comment": ["Component dependency requirements for application. This includes runtime environments and shared libraries that are not included in the application distribution package, but required to run the application (Examples: DirectX, Java or .NET runtime)."],
      "http://schema.org/domain": [{"@id": "http://schema.org/SoftwareApplication"}],
      "http://schema.org/range": [
        {"@id": "http://schema.org/URL"},
        {"@id": "http://schema.org/Text"}
      ]
    },
    {
      "@id": "http://schema.org/screenshot",
      "@type": ["rdf:Property"],
      "rdfs:label": ["screenshot"],
      "rdfs:comment": ["A link to a screenshot image of the app."],
      "http://schema.org/domain": [{"@id": "http://schema.org/SoftwareApplication"}],
      "http://schema.org/range": [
        {"@id": "http://schema.org/ImageObject"},
        {"@id": "http://schema.org/URL"}
      ]
    },
    {
      "@id": "http://schema.org/softwareVersion",
      "@type": ["rdf:Property"],
      "rdfs:label": ["softwareVersion"],
      "rdfs:comment": ["Version of the software instance."],
      "http://schema.org/domain": [{"@id": "http://schema.org/SoftwareApplication"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Text"}]
    },
    {
      "@id": "http://schema.org/storageRequirements",
      "@type": ["rdf:Property"],
      "rdfs:label": ["storageRequirements"],
      "rdfs:comment": ["Storage requirements (free space required)."],
      "http://schema.org/domain": [{"@id": "http://schema.org/SoftwareApplication"}],
      "http://schema.org/range": [
        {"@id": "http://schema.org/URL"},
        {"@id": "http://schema.org/Text"}
      ]
    },
    {
      "@id": "http://schema.org/episodeNumber",
      "@type": ["rdf:Property"],
      "rdfs:label": ["episodeNumber"],
      "rdfs:comment": ["The episode number."],
      "http://schema.org/domain": [{"@id": "http://schema.org/TVEpisode"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Number"}]
    },
    {
      "@id": "http://schema.org/partOfSeason",
      "@type": ["rdf:Property"],
      "rdfs:label": ["partOfSeason"],
      "rdfs:comment": ["The season to which this episode belongs."],
      "http://schema.org/domain": [{"@id": "http://schema.org/TVEpisode"}],
      "http://schema.org/range": [{"@id": "http://schema.org/TVSeason"}]
    },
    {
      "@id": "http://schema.org/partOfTVSeries",
      "@type": ["rdf:Property"],
      "rdfs:label": ["partOfTVSeries"],
      "rdfs:comment": ["The TV series to which this episode or season belongs."],
      "http://schema.org/domain": [
        {"@id": "http://schema.org/TVEpisode"},
        {"@id": "http://schema.org/TVSeason"}
      ],
      "http://schema.org/range": [{"@id": "http://schema.org/TVSeries"}]
    },
    {
      "@id": "http://schema.org/episode",
      "@type": ["rdf:Property"],
      "rdfs:label": ["episode"],
      "rdfs:comment": ["An episode of a TV series or season."],
      "http://schema.org/domain": [
        {"@id": "http://schema.org/TVSeason"},
        {"@id": "http://schema.org/TVSeries"}
      ],
      "http://schema.org/range": [{"@id": "http://schema.org/TVEpisode"}]
    },
    {
      "@id": "http://schema.org/episodes",
      "@type": ["rdf:Property"],
      "rdfs:label": ["episodes"],
      "rdfs:comment": ["The episode of a TV series or season (legacy spelling; see singular form, episode)."],
      "http://schema.org/domain": [
        {"@id": "http://schema.org/TVSeason"},
        {"@id": "http://schema.org/TVSeries"}
      ],
      "http://schema.org/range": [{"@id": "http://schema.org/TVEpisode"}]
    },
    {
      "@id": "http://schema.org/numberOfEpisodes",
      "@type": ["rdf:Property"],
      "rdfs:label": ["numberOfEpisodes"],
      "rdfs:comment": ["The number of episodes in this season or series."],
      "http://schema.org/domain": [
        {"@id": "http://schema.org/TVSeason"},
        {"@id": "http://schema.org/TVSeries"}
      ],
      "http://schema.org/range": [{"@id": "http://schema.org/Number"}]
    },
    {
      "@id": "http://schema.org/seasonNumber",
      "@type": ["rdf:Property"],
      "rdfs:label": ["seasonNumber"],
      "rdfs:comment": ["The season number."],
      "http://schema.org/domain": [{"@id": "http://schema.org/TVSeason"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Integer"}]
    },
    {
      "@id": "http://schema.org/season",
      "@type": ["rdf:Property"],
      "rdfs:label": ["season"],
      "rdfs:comment": ["A season of a TV series."],
      "http://schema.org/domain": [{"@id": "http://schema.org/TVSeries"}],
      "http://schema.org/range": [{"@id": "http://schema.org/TVSeason"}]
    },
    {
      "@id": "http://schema.org/seasons",
      "@type": ["rdf:Property"],
      "rdfs:label": ["seasons"],
      "rdfs:comment": ["The seasons of the TV series (legacy spelling; see singular form, season)."],
      "http://schema.org/domain": [{"@id": "http://schema.org/TVSeries"}],
      "http://schema.org/range": [{"@id": "http://schema.org/TVSeason"}]
    },
    {
      "@id": "http://schema.org/description",
      "@type": ["rdf:Property"],
      "rdfs:label": ["description"],
      "rdfs:comment": ["A short description of the item."],
      "http://schema.org/domain": [{"@id": "http://schema.org/Thing"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Text"}]
    },
    {
      "@id": "http://schema.org/image",
      "@type": ["rdf:Property"],
      "rdfs:label": ["image"],
      "rdfs:comment": ["URL of an image of the item."],
      "http://schema.org/domain": [{"@id": "http://schema.org/Thing"}],
      "http://schema.org/range": [{"@id": "http://schema.org/URL"}]
    },
    {
      "@id": "http://schema.org/name",
      "@type": ["rdf:Property"],
      "rdfs:label": ["name"],
      "rdfs:comment": ["The name of the item."],
      "http://schema.org/domain": [{"@id": "http://schema.org/Thing"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Text"}]
    },
    {
      "@id": "http://schema.org/url",
      "@type": ["rdf:Property"],
      "rdfs:label": ["url"],
      "rdfs:comment": ["URL of the item."],
      "http://schema.org/domain": [{"@id": "http://schema.org/Thing"}],
      "http://schema.org/range": [{"@id": "http://schema.org/URL"}]
    },
    {
      "@id": "http://schema.org/commentText",
      "@type": ["rdf:Property"],
      "rdfs:label": ["commentText"],
      "rdfs:comment": ["The text of the UserComment."],
      "http://schema.org/domain": [{"@id": "http://schema.org/UserComments"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Text"}]
    },
    {
      "@id": "http://schema.org/commentTime",
      "@type": ["rdf:Property"],
      "rdfs:label": ["commentTime"],
      "rdfs:comment": ["The time at which the UserComment was made."],
      "http://schema.org/domain": [{"@id": "http://schema.org/UserComments"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Date"}]
    },
    {
      "@id": "http://schema.org/discusses",
      "@type": ["rdf:Property"],
      "rdfs:label": ["discusses"],
      "rdfs:comment": ["Specifies the CreativeWork associated with the UserComment."],
      "http://schema.org/domain": [{"@id": "http://schema.org/UserComments"}],
      "http://schema.org/range": [{"@id": "http://schema.org/CreativeWork"}]
    },
    {
      "@id": "http://schema.org/replyToUrl",
      "@type": ["rdf:Property"],
      "rdfs:label": ["replyToUrl"],
      "rdfs:comment": ["The URL at which a reply may be posted to the specified UserComment."],
      "http://schema.org/domain": [{"@id": "http://schema.org/UserComments"}],
      "http://schema.org/range": [{"@id": "http://schema.org/URL"}]
    },
    {
      "@id": "http://schema.org/videoFrameSize",
      "@type": ["rdf:Property"],
      "rdfs:label": ["videoFrameSize"],
      "rdfs:comment": ["The frame size of the video."],
      "http://schema.org/domain": [{"@id": "http://schema.org/VideoObject"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Text"}]
    },
    {
      "@id": "http://schema.org/videoQuality",
      "@type": ["rdf:Property"],
      "rdfs:label": ["videoQuality"],
      "rdfs:comment": ["The quality of the video."],
      "http://schema.org/domain": [{"@id": "http://schema.org/VideoObject"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Text"}]
    },
    {
      "@id": "http://schema.org/browserRequirements",
      "@type": ["rdf:Property"],
      "rdfs:label": ["browserRequirements"],
      "rdfs:comment": ["Specifies browser requirements in human-readable text. For example,\"requires HTML5 support\"."],
      "http://schema.org/domain": [{"@id": "http://schema.org/WebApplication"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Text"}]
    },
    {
      "@id": "http://schema.org/breadcrumb",
      "@type": ["rdf:Property"],
      "rdfs:label": ["breadcrumb"],
      "rdfs:comment": ["A set of links that can help a user understand and navigate a website hierarchy."],
      "http://schema.org/domain": [{"@id": "http://schema.org/WebPage"}],
      "http://schema.org/range": [{"@id": "http://schema.org/Text"}]
    },
    {
      "@id": "http://schema.org/isPartOf",
      "@type": ["rdf:Property"],
      "rdfs:label": ["isPartOf"],
      "rdfs:comment": ["Indicates the collection or gallery to which the item belongs."],
      "http://schema.org/domain": [{"@id": "http://schema.org/WebPage"}],
      "http://schema.org/range": [{"@id": "http://schema.org/CollectionPage"}]
    },
    {
      "@id": "http://schema.org/mainContentOfPage",
      "@type": ["rdf:Property"],
      "rdfs:label": ["mainContentOfPage"],
      "rdfs:comment": ["Indicates if this web page element is the main subject of the page."],
      "http://schema.org/domain": [{"@id": "http://schema.org/WebPage"}],
      "http://schema.org/range": [{"@id": "http://schema.org/WebPageElement"}]
    },
    {
      "@id": "http://schema.org/primaryImageOfPage",
      "@type": ["rdf:Property"],
      "rdfs:label": ["primaryImageOfPage"],
      "rdfs:comment": ["Indicates the main image on the page"],
      "http://schema.org/domain": [{"@id": "http://schema.org/WebPage"}],
      "http://schema.org/range": [{"@id": "http://schema.org/ImageObject"}]
    },
    {
      "@id": "http://schema.org/significantLink",
      "@type": ["rdf:Property"],
      "rdfs:label": ["significantLink"],
      "rdfs:comment": ["One of the more significant URLs on the page. Typically, these are the non-navigation links that are clicked on the most."],
      "http://schema.org/domain": [{"@id": "http://schema.org/WebPage"}],
      "http://schema.org/range": [{"@id": "http://schema.org/URL"}]
    },
    {
      "@id": "http://schema.org/significantLinks",
      "@type": ["rdf:Property"],
      "rdfs:label": ["significantLinks"],
      "rdfs:comment": ["The most significant URLs on the page. Typically, these are the non-navigation links that are clicked on the most (legacy spelling; see singular form, significantLink)."],
      "http://schema.org/domain": [{"@id": "http://schema.org/WebPage"}],
      "http://schema.org/range": [{"@id": "http://schema.org/URL"}]
    }
  ]
}