import { Hotel } from '../../app/classes/hotel';

export const HOTELS: Hotel[] = [
    {
        id: '01',
        name: 'Conrad Pune - Luxury by Hilton',
        address: {
            detail: '7 Mangaldas Road, Near Wadia College, Koregaon Park, Opp To Metro House',
            city: 'Pune',
            state: 'Maharashtra',
            zipcode: '411001'
        },
        latitude : 18.5351,
        longitude: 73.8831,
        // tslint:disable-next-line:max-line-length
        description: 'Location: Located in the heart of Pune\'s dynamic central business district, Conrad Pune is an iconic structure.The hotel is 3 km from Pune Railway Station and a 20-min drive from the Pune Airport. Nearby tourist attractions include Shaniwar Wada Palace (4 km) and Aga Khan Palace (5 km).Room Amenities: Conrad Pune offers modern guest rooms and suites. All the rooms include an HDTV, espresso machine, minibar, iron/ironing board, individually controlled air-conditioning, and a gleaming marble bathroom with walk-in rain shower. Hotel Facilities: Events can be organized in the hotel for up to 1200 people. There is a luxury spa, hair salon, fitness centre, concierge, 24-hour business centre, babysitting services and 24-hour room service. Dining:Coriander Kitchen (multi-cuisine), Zeera (grilled dishes and seafood), Koji (Asian), Masu (cocktail bar), Pune Sugar Box (24-hour bakery), Kabana (pool bar) and The Executive Lounge.',
        website: 'http://conradhotels3.hilton.com/en/hotels/india/conrad-pune-PNQCICI/index.html',
        contact: '+91-20-67456745',
        email: 'ConradPune.info@conradhotels.com',
        type: '5-star',
        rating: {
            food: 4,
            rooms: 5,
            service: 4,
            facilities: 4,
            cleanliness: 5,
            value_for_money: 5
        },
        room_types: {
            // tslint:disable-next-line:max-line-length
            'Deluxe Room - 2 Queen Beds': ['452 square feet, 2 Queen Beds (Extra beds available: Crib), Room sleeps 3 guests (up to 2 children), Breakfast included.', 8499],
            // tslint:disable-next-line:max-line-length
            'Deluxe Room': ['452 square feet, 1 King Bed (Extra beds available: Crib), Room sleeps 3 guests (up to 2 children)Free Parking, Breakfast included, Internet Available', 7649],
            // tslint:disable-next-line:max-line-length
            'Premiere Room': ['452 square feet, 2 Queen Beds (Extra beds available: Crib), Room sleeps 3 guests (up to 2 children), Free Parking, Breakfast included', 9349],
            // tslint:disable-next-line:max-line-length
            'Executive Room': [' Business Lounge Access, 452 square feet, 2 Queen Beds (Extra beds available: Crib), Room sleeps 3 guests (up to 2 children), Breakfast Included.', 10199],
            // tslint:disable-next-line:max-line-length
            'King, Deluxe Suite': ['883 square feet, 1 King Bed (Extra beds available: Crib), Room sleeps 3 guests (up to 2 children), Free Parking, Breakfast included', 22524]
        }
    },
    {
        'id': '02',
        'name': 'Four Points By Sheraton',
        'address': {
            'detail': '5th Mile Stone, Nagar Road, Viman Nagar',
            'city': 'Pune',
            'state': 'Maharashtra',
            'zipcode': '411014'
        },
        latitude: 18.5627,
        longitude: 73.9224,
        // tslint:disable-next-line:max-line-length
        'description': 'This upscale, modern hotel is the definition of splendour and sophistication. Four Points By Sheraton provides the highest level of professional hospitality, and includes top-class facilities such as a luxurious spa and outdoor pool. Whether in a room or suite, luxurious features such as rainforest showers, plush bathrobes, and Four Comfort Beds are standard. Additional amenities include the daily newspaper and bottled water. Corporate guests have the opportunity to host meetings or seminars in one of seven high-tech venues. The gym provides a chance to work up a sweat and burn off the stress of the day. Visitors can dine all day at Four Points By Sheraton: Pan-Asian cuisine at Panash, Mediterranean at the open-air Alfresco Beyond The Eatery, and cuisine from around the world at The Eatery. The Best Brew Pub serves ice-cold drinks.One of the biggest landmarks in Indian history, Aga Khan Palace, is about three kilometres from the hotel, and shopping at Phoenix Market City is about two kilometres away.',
        'website': 'http://www.starwoodhotels.com/fourpoints/property/overview/index.html?propertyID=3572&language=en_US',
        'contact': '+91-20-39406699',
        'email': 'reservations@punefourpoints.com',
        'type': '5-star',
        'rating': {
            'food': 4.5,
            'rooms': 3,
            'service': 4,
            'facilities': 3,
            'cleanliness': 5,
            'value_for_money': 3.5
        },
        'room_types': {
            // tslint:disable-next-line:max-line-length
            'Comfort Room': ['301 square feet, 1 King Bed or 2 Single Beds (Extra beds available: Crib), Room sleeps 3 guests (up to 2 children), Breakfast Included, Free Internet', 5850],
            // tslint:disable-next-line:max-line-length
            'Studio Apartment': ['450 square feet, 1 King Bed (Extra beds available: Crib), Room sleeps 3 guests (up to 2 children), Breakfast Included, Free Internet', 7000],
            // tslint:disable-next-line:max-line-length
            'One bedroom Apartment': ['549 square feet, 1 King Bed (Extra beds available: Crib), Room sleeps 3 guests (up to 2 children), Breakfast Included, Pay at property available', 8000],
            // tslint:disable-next-line:max-line-length
            'Business Room': ['Room with view, 301 square feet, 1 King Bed or 2 Queen Beds (Extra beds available: Crib), Room sleeps 3 guests (up to 2 children), Breakfast Included', 9000],
            // tslint:disable-next-line:max-line-length
            'Executive Suite': ['Room with view, 549 square feet, 1 King Bed (Extra beds available: Crib), Room sleeps 3 guests (up to 2 children), Breakfast Included, Free Parking, Internet', 11250]
        }
    },
    {
        'id': '03',
        'name': 'Crowne Plaza Pune City Centre',
        'address': {
            'detail': 'C.TS. No. 37 & 37/1, Bund Garden Road, Next to Jehangir Hospital',
            'city': 'Pune',
            'state': 'Maharashtra',
            'zipcode': '411011'
        },
        latitude: 18.5312771,
        longitude: 73.8768333,
        // tslint:disable-next-line:max-line-length
        'description': 'Crowne Plaza Pune City Centre boasts a city-central location near the Pune Railway Station and the Lohegaon airport. The property provides a modern, 24-hour gym and rooftop swimming pool, and is also home to Evviva, a rooftop Indian restaurant and lounge. Modernly equipped and elegantly styled, all rooms offer stunning city views through floor-to-ceiling windows. Standard amenities include a spacious work desk, LCD TV, minibar, coffee/tea facilities and a telephone. Corporate travellers will appreciate a 24-hour business centre, property-wide Wi-Fi, and complimentary self-parking. For convenience, laundry and concierge services are offered at the 24-hour front desk. Guests may enjoy all-day dining, with buffet and a la carte options, at the Mosaic Restaurant, which serves a multi-cuisine menu. Sweet treats are available throughout the day at Mosaic Bakery. Crowne Plaza Pune City Centre is only a ten-minute walk from Matoshree Ramadai Bhimrao Ambadkar Udyan, a lovely park with gardens, walking trails, yoga classes and a playground. For shopping, guests should visit SGS Mall, two kilometres away.',
        'website': 'https://www.ihg.com/crowneplaza/hotels/us/en/pune/pnqcc/hoteldetail',
        'contact': '+91-124-455-1212',
        'email': 'reservations@crowneplazapune.com',
        'type': '3-star',
        'rating': {
            'food': 3.5,
            'rooms': 3.5,
            'service': 4.2,
            'facilities': 4,
            'cleanliness': 4,
            'value_for_money': 4.5
        },
        'room_types': {
            '1 King Deluxe': ['1 King Bed, City View,336 Sq.Ft., Breakfast Included', 6108],
            'Deluxe': ['Two Single Beds, City View, 336 Sq. Ft., Breakfast Included', 6108],
            '1 King Club': ['1 King Bed, City View, Bath-tub, Extra Single Bed, Breakfast Included', 8101]
        }
    },
    {
        'id': '04',
        'name': 'Ibis Pune',
        'address': {
            'detail': 'Survey 32 Nagar Road',
            'city': 'Pune',
            'state': 'Maharashtra',
            'zipcode': '411014'
        },
        latitude : 18.5599,
        longitude: 73.9131,
        // tslint:disable-next-line:max-line-length
        'description': 'The ibis Pune is a contemporary hotel option that features a fitness centre, on-site restaurant and 24-hour front desk. Situated in Pune\'s Viman Nagar neighbourhood, the accommodation is less than ten minutes away on foot from the popular Phoenix Market City shopping centre.The air-conditioned rooms at the ibis Pune all contain a satellite television, work desk and tea / coffee - making facilities. The private bathrooms supply a shower and hairdryer.Wi - Fi access and private off-street parking are both supplied free of charge. Additional facilities include laundry and luggage storage services. A hearty continental breakfast buffet is available throughout each morning. Later in the day, guests can enjoy an international menu at the hotel\'s Spice It restaurant, while a dedicated bar offers the opportunity to sample a refreshing beverage. The historic Aga Khan Palace is a little over two kilometres away from the accommodation. Pune Airport is conveniently just a three-and-a-half kilometre drive away.',
        'website': 'https://www.accorhotels.com/gb/hotel-6543-ibis-pune-viman-nagar/index.shtml',
        'contact': '020-4018-4018',
        'email': 'h6543-re@accor.com',
        'type': '4-star',
        'rating': {
            'food': 3,
            'rooms': 3,
            'service': 4,
            'facilities': 4,
            'cleanliness': 4,
            'value_for_money': 3.5
        },
        'room_types': {
            // tslint:disable-next-line:max-line-length
            'Deluxe Twin Room': ['Room with view, 190 square feet, 2 Single Beds, Room sleeps 3 guests (up to 1 child), Pay at property available, Breakfast Included, Free Parking, Free Internet', 4699],
            'Standard Queen Room': ['190 square feet, 1 Queen Bed, Room sleeps 3 guests (up to 1 child), Breakfast Included', 4699],
            // tslint:disable-next-line:max-line-length
            'Standard Queen Room with Extra Benefits': ['17.5 square feet, 1 Queen Bed, Room sleeps 3 guests (up to 1 child), Breakfast Included, Free Parking, Free Internet, Free One Way Airport Transfer', 5198]
        }
    },
    {
        'id': '05',
        'name': 'Hard Rock Hotel Goa',
        'address': {
            'detail': '370/14, Porba Vaddo, Calangute, Bardez',
            'city': 'Goa',
            'state': 'Maharashtra',
            'zipcode': '403516'
        },
        latitude : 15.5461,
        longitude : 73.7666,
        // tslint:disable-next-line:max-line-length
        'description': 'Formally known as the North 16 Goa, the Hard Rock Hotel Goa offers some of Goa’s most stylish and trendy accommodation with resort-style amenities just minutes from the famous beaches. The spacious rooms have that sleek and modern international feel, but with some bold use of colour. Each features air conditioning, minibar, LCD TV, in-room safe, work desk and telephone. The outdoor pool terrace is the central attraction at Hard Rock Goa, and features the brand’s signature live performances and other entertainment. There is also a wellness area with a full spa and gym. Sessions is the main buffet restaurant and serves international favourites for all three meals, while the Poolside Bar and Grille is the place to be for the casual atmosphere, drinks and light meals. Calangute Beach is only 0.8 miles from Hard Rock Hotel Goa, while the airport is approximately 23 miles to the south.',
        'website': 'https://www.hardrockhotels.com/goa/',
        'contact': '+91-832-674-5555',
        'email': 'reservations@hrhgoa.com',
        'type': '5-star',
        'rating': {
            'food': 3.9,
            'rooms': 3.9,
            'service': 4.5,
            'facilities': 4.5,
            'cleanliness': 4.7,
            'value_for_money': 4
        },
        'room_types': {
            'Deluxe Room King Bed - Breakfast': ['FREE Breakfast, Accommodation, 1024 sq. ft.', 5474],
            'Deluxe Room King Bed - 2 Meals': ['FREE Breakfast and Dinner, Accommodation, 1024 sq. ft.', 6642],
            'Deluxe Room Twin Bed': ['Deluxe Room Twin Bed, FREE Breakfast, Accommodation, 256 sq. ft.', 5474],
            'Deluxe Room - 2 Meals': ['Deluxe Room Twin Bed, FREE Breakfast and Dinner, Accommodation, 256 sq. ft', 6642]
        }
    },
    {
        'id': '06',
        'name': 'Novotel Goa Shrem',
        'address': {
            'detail': 'Anna Waddo, Main Candolim Road, Anna Waddo Main Candolim Road, Bardez, Candolim',
            'city': 'Goa',
            'state': 'Maharashtra',
            'zipcode': '403515'
        },
        latitude : 15.5266,
        longitude : 73.7660,
        // tslint:disable-next-line:max-line-length
        'description': 'Relaxation is on the cards for guests staying at Novotel Goa Shrem. There is an outdoor pool at the hotel as well as a wellness centre that features a Jacuzzi, hammam and Turkish steambath. Accommodations at the hotel come with a flat-screen TV, iPod docking station, in-room safe and coffee and tea making facilities. The rooms also feature an en-suite bathroom with hair dryer. Wi-Fi is available but charges may apply. There is a fitness centre plus a range of meeting facilities at Novotel Goa Shrem. Guests can also utilise the on-site library or stop by the tour desk for advice and help planning excursions around the nearby area. The Square, the on-site restaurant at the hotel, serves a menu full of international favourites and also has an interactive kitchen. Candolim Beach is a ten-minute walk from the property while Aguada Fort is a 15-minute drive away.',
        'website': 'https://www.novotel.com',
        'contact': '+91 84008887513',
        'email': 'h8855-RE@accor.com',
        'type': '5-star',
        'rating': {
            'food': 3,
            'rooms': 4.3,
            'service': 4.4,
            'facilities': 3.9,
            'cleanliness': 4.2,
            'value_for_money': 3.7
        },
        'room_types': {
            'Superior Room': ['1 double bed or 2 single beds, Free private parking, Breakfast & dinner included.', 9736],
            // tslint:disable-next-line:max-line-length
            'Luxury Room': ['1 large double bed or 2 single beds. This room situated in the Club Wing of the property offers a wooden deck balcony, a sofa bed, 42 inch LED TV and organic tea in the rooms. Benefits include an evening sun-downer (Wednesday to Sunday, 5.30 pm to 7.00 pm) by the pool with unique bites and smart cocktails designed by culinary specialists.', 11896],
            // tslint:disable-next-line:max-line-length
            'Elegance King Suite' : ['1 extra large double bed. This spacious duplex AC suite room includes a 42" TV and a sofa in the living area with a separate powder room. The bedroom comes with an electric kettle, walk in wardrobe, a private bathroom, with bath or shower and a hairdryer. Complimentary bottled water is provided. Breakfast & dinner included.', 13015]
        }
    },
    {
        'id': '07',
        'name': 'Baywatch Resort Goa',
        'address': {
            'detail': 'Sernabatim Beach Road, Colva ',
            'city': 'Goa',
            'state': 'Maharashtra',
            'zipcode': '403709'
        },
        latitude : 18.5117821,
        longitude : 73.9179113,
        // tslint:disable-next-line:max-line-length
        'description': 'The four-star Baywatch Resort is a leisure resort situated along the Colva Beach and offers comfortable and spacious rooms. Recreation facilites include a fitness center, swimming pool, and spa. There is also a fully equipped business center so that you can remain up-to-date with your work even while on vacation. Enjoy world cuisine at Pams restuarant, or sip a cocktail at Harrys Lounge. In addition to that you can also enjoy the theme nights that are organized every evening with exotic food, noisy games, and vibrant music. Booking your stay at the Baywatch Resort is easy, simply select the dates and enter! Top amenities include a luxury spa, pool, delicious food, etc.',
        'website': 'https://www.baywatchresort.in/',
        'contact': '+91 832 6697799, +91 9225907104',
        'email': 'reservations@baywatchresort.in',
        'type': '4-star',
        'rating': {
            'food': 3,
            'rooms': 3.2,
            'service': 3.2,
            'facilities': 3.5,
            'cleanliness': 3.6,
            'value_for_money': 3
        },
        'room_types': {
            'Deluxe Double or Twin Room': ['1 double bed or 2 single beds, Free private parking, Breakfast & dinner included.', 4750],
            // tslint:disable-next-line:max-line-length
            'Suite': ['1 Large Double Bed. 27 m², Flat-screen TV, Air conditioning, Private bathroom, Balcony, Telephone, Cable Channels, Seating Area, Fan, Sofa, Wardrobe/Closet, Shower, Free toiletries, Minibar, Electric kettle', 5250]
        }
    },
    {
        'id': '08',
        'name': 'Fidalgo Goa',
        'address': {
            'detail': '18th June Road , Panaji',
            'city': 'Goa',
            'state': 'Maharashtra',
            'zipcode': '403001'
        },
        latitude : 15.4973,
        longitude : 73.8248,
        // tslint:disable-next-line:max-line-length
        'description': 'Right from 1974, Hotel Fidalgo has exemplified hospitality for both business and leisure travellers and is one of Panaji-Goa’s most significant landmarks. Standing proudly in central Panaji, the artery of the capital, its reputation for style and efficiency attracts local and international visitors, notable personalities and families. Offering 4-star luxury, 101 elegant rooms, 6 restaurants, a spa and well-equipped venues for banquets and conferences, Hotel Fidalgo provides a unique sense of place with shopping plazas, art galleries, and local attractions within reach. These are the things that make it special. And make you feel you already want to come back!',
        'website': 'http://www.fidalgogroup.com/',
        'contact': '0091- 832 – 2226291 to 99',
        'email': 'reservationgoa@fidalgogroup.com',
        'type': '4-star',
        'rating': {
            'food': 4.7,
            'rooms': 3.9,
            'service': 4.7,
            'facilities': 4.0,
            'cleanliness': 3.8,
            'value_for_money': 3.7
        },
        'room_types': {
            'Premium Room': ['1 double bed, Breakfast included, Pay at property available', 4800],
            // tslint:disable-next-line:max-line-length
            'Privilege Room': ['1 Double Bed, Balcony with View, Breakfast included, Pay at property available.', 6500],
            // tslint:disable-next-line:max-line-length
            'Suite Room': ['1 Double Bed, Balcony with View, Air conditioning, Electric Kettle, Breakfast & Dinner included, Pay at property available.', 14000],
            // tslint:disable-next-line:max-line-length
            'Standard Single Room': ['1 Single Bed, Air Conditioning, TV, Breakfast included at Rs. 350 , Pay at property not available', 4500]
        }
    },
    {
        'id': '09',
        'name': 'Hotel Mandovi',
        'address': {
            'detail': 'D. B. Marg, Panaji',
            'city': 'Goa',
            'state': 'Maharashtra',
            'zipcode': '403001'
        },
        latitude : 15.5010034,
        longitude : 73.8265948,
        // tslint:disable-next-line:max-line-length
        'description': 'Hotel Mandovi was commissioned in 1952 during the Portuguese rule in Goa., and at the time the miraculous body of the St. Francis Xavier was being exposed.It had the honour to play host in serving top religious & political leaders, foreign diplomats and social dignitaries that visited Goa during that time. It still maintains a strong emotional and business cord between its innumerable customers from India and abroad, who feel it is their Home away from Home. Goa\'s traditions and culture are all intermixed in its hospitality package. In the Capital city, Panjim, it still is a gracious landmark with a rich Goan heritage.',
        'website': 'http://www.hotelmandovigoa.com/',
        'contact': '+91 832 2224405-09',
        'email': 'reservationgoa@mandovigoa.com',
        'type': '3-star',
        'rating': {
            'food': 2.5,
            'rooms': 3.5,
            'service': 4.1,
            'facilities': 3.6,
            'cleanliness': 3.8,
            'value_for_money': 4.2
        },
        'room_types': {
            // tslint:disable-next-line:max-line-length
            'Premium Room': ['Twin Beds, 200 sq. ft, FREE Breakfast, Accommodation, Mini Bar,Mineral Water,Power backup (fans and Tublight), Shaving & Dental Kit,Bathroom Toiletries, Hot & Cold water, Study Table, In-room safe, WiFi Internet, Coffee Table, Flat-screen TV, Room Service, Wardrobe, Intercom ', 2849],
            // tslint:disable-next-line:max-line-length
            'Premium Executive Room': ['Twin Beds, 200 sq. ft, FREE Breakfast, Accommodation, Mini Bar,Mineral Water,Power backup (fans and Tublight), Shaving & Dental Kit,Bathroom Toiletries, Hot & Cold water, Study Table, In-room safe, WiFi Internet, Coffee Table, Flat-screen TV, Room Service, Wardrobe, Intercom, Iron/ironing board (on request)', 3526],
            // tslint:disable-next-line:max-line-length
            'Deluxe Room': ['Twin Beds, 315 sq. ft, FREE Breakfast, Accommodation, Mini Bar,Mineral Water,Power backup (fans and Tublight), Shaving & Dental Kit,Bathroom Toiletries, Hot & Cold water, Study Table, In-room safe, WiFi Internet, Coffee Table, Flat-screen TV, Room Service, Wardrobe, Intercom, Iron/ironing board (on request)', 4167]
        }
    },
    {
        'id': '10',
        'name': 'St Laurn Business',
        'address': {
            'detail': '15 A, Koregaon Park Road, Next To Taj Blue Diamond',
            'city': 'Pune',
            'state': 'Maharashtra',
            'zipcode': '411001'
        },
        latitude : 18.5385,
        longitude : 73.8859,
        // tslint:disable-next-line:max-line-length
        'description': 'Situated in the upmarket Koregaon Park area, steps from the Mula Mutha River St Laurn Business is an upscale four-star hotel featuring an inviting 90-foot tall atrium, a grand banquet hall and a rooftop pool boasting panoramic views of the city. Contemporary guest rooms offer a flat-screen TV, air conditioning, an in-room safe, tea/coffee-making facilities and an en-suite bathroom. For an extra fee, guests will have access to a well-stocked minibar. In addition to travel assistance, St Laurn Business features a business centre, fitness facilities, free Wi-Fi and a sundeck. Twenty-four hour security is provided for guest peace of mind. In-house eateries are open 24-hours a day and include Café 15A, a fine-dining restaurant specialising in a variety of delectable cuisines with drinks available at the bar, and Ebony, a multi-cuisine buffet restaurant. Round-the-clock in-room dining is also provided. The hotel is a 15-minute walk from Royal Connaught Boat Club and approximately a kilometre from the shaded Osho Teerth Park.',
        'website': 'http://stlaurnhotels.com/pune/',
        'contact': '+91-20-4000 8000',
        'email': 'reservations@stlaurnhotels.com',
        'type': '4-star',
        'rating': {
            'food': 2.0,
            'rooms': 3.8,
            'service': 3.6,
            'facilities': 3.7,
            'cleanliness': 3.3,
            'value_for_money': 3.6
        },
        'room_types': {
            // tslint:disable-next-line:max-line-length
            'Executive Twin Bed': ['Twin Beds, 224 sq. ft., Accommodation only, 15% discount on beverages( alcoholic & non alcoholic), 15% off on Al a carte Menu on Food, 15% disc on laundry, Complimentary half kg cake on Birthday and Anniversary on providing the proof.', 2568],
            // tslint:disable-next-line:max-line-length
            'Executive Superior Room': ['King Bed, 352 sq. ft., Accommodation with Breakfast, 15% discount on beverages( alcoholic & non alcoholic), 15% off on Al a carte Menu on Food, 15% disc on laundry, Complimentary half kg cake on Birthday and Anniversary on providing the proof.', 3517],
            // tslint:disable-next-line:max-line-length
            'Executive Deluxe Room': ['King Bed, 368 sq. ft., FREE Breakfast and Dinner, Complimentary One Way Airport Transfer (Pick up or Drop), Complimentary half kg cake on Birthday and Anniversary on providing the proof, Accommodation, 10% discount on Laundry', 5420]
        }
    }
];
