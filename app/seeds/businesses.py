from app.models import db, Business

def seed_businesses():
    business1 = Business(
        user_id=1,
        name="Howlin' Ray's",
        address="727 N Broadway",
        zipcode="90012",
        city="Los Angeles",
        state="CA",
        phone_number="2139358399",
        website="http://www.howlinrays.com",
    )
    business2 = Business(
        user_id=2,
        name="Mokkoji Shabu Shabu Bar",
        address="14041 Jeffrey Rd",
        zipcode="92620",
        city="Irvine",
        state="CA",
        phone_number="9494510011",
        website="https://mokkojishabushabu.com",
    )
    business3 = Business(
        user_id=3,
        name="Ohshima Japanese Cuisine",
        address="1956 N Tustin St",
        zipcode="92865",
        city="Orange",
        state="CA",
        phone_number="7149980098",
        website="https://ohshimasushi.com",
    )
    business4 = Business(
        user_id=4,
        name="PhoHolic",
        address="14932 Bushard St",
        zipcode="92683",
        city="Westminster",
        state="CA",
        phone_number="7147338822",
        website="https://phoholic.com",
    )
    business5 = Business(
        user_id=5,
        name="Brodard Restaurant",
        address="16105 Brookhurst St",
        zipcode="92708",
        city="Fountain Valley",
        state="CA",
        phone_number="6572474401",
        website="https://www.brodardrestaurant.net/",
    )
    business6 = Business(
        user_id=6,
        name="OMOMO Tea Shoppe",
        address="2983 Chino Ave",
        zipcode="91709",
        city="Chino Hills",
        state="CA",
        phone_number="9093648644",
        website="https://www.omomoteashoppe.com/",
    )
    business7 = Business(
        user_id=7,
        name="Hui Lau Shan",
        address="2222 Sawtelle Blvd",
        zipcode="90064",
        city="Los Angeles",
        state="CA",
        phone_number="4249778176",
        website="https://www.clover.com/online-ordering/hlswla",
    )
    business8 = Business(
        user_id=8,
        name="Bavel",
        address="500 Mateo St",
        zipcode="90013",
        city="Los Angeles",
        state="CA",
        phone_number="2132324966",
        website="https://baveldtla.com/",
    )
    business9 = Business(
        user_id=9,
        name="Bestia",
        address="2121 E 7th Pl",
        zipcode="90021",
        city="Los Angeles",
        state="CA",
        phone_number="2135145724",
        website="https://bestiala.com/",
    )
    business10 = Business(
        user_id=10,
        name="Shake Shack",
        address="6201 Hollywood Blvd",
        zipcode="90028",
        city="Los Angeles",
        state="CA",
        phone_number="3235937763",
        website="https://shakeshack.com/",
    )
    business11 = Business(
        user_id=11,
        name="Pho 79 Restaurant",
        address="9941 Hazard Ave",
        zipcode="92843",
        city="Garden Grove",
        state="CA",
        phone_number="7145312490",
        website="https://www.pho79.com/",
    )
    business12 = Business(
        user_id=12,
        name="Bopomofo Cafe",
        address="841 W Las Tunas Dr",
        zipcode="91776",
        city="San Gabriel",
        state="CA",
        phone_number="7141234567",
        website="http://www.bopomofocafe.com",
    )
    business13 = Business(
        user_id=13,
        name="7 Leaves Cafe",
        address="151 N Garfield Ave",
        zipcode="91801",
        city="Alhambra",
        state="CA",
        phone_number="6267827775",
        website="https://7leavescafe.com/",
    )
    business14 = Business(
        user_id=14,
        name="Mr BBQ",
        address="305 N State College Blvd",
        zipcode="92831",
        city="Fullerton",
        state="CA",
        phone_number="7144410000",
        website="https://www.mrbbqfullerton.com/",
    )
    business15 = Business(
        user_id=15,
        name="Anjin",
        address="3033 Bristol St",
        zipcode="92626",
        city="Costa Mesa",
        state="CA",
        phone_number="7149796700",
        website="https://anjin.com",
    )
    business16 = Business(
        user_id=16,
        name="Tsuruhashi",
        address="18798 Brookhurst St",
        zipcode="92708",
        city="Fountain Valley",
        state="CA",
        phone_number="7145938393",
        website="https://tsuruhashirestaurant.com/",
    )
    business17 = Business(
        user_id=17,
        name="Izakaya Hachi",
        address="1880 W Carson St",
        zipcode="90501",
        city="Torrance",
        state="CA",
        phone_number="3106188357",
        website="http://www.hachius.com/",
    )
    business18 = Business(
        user_id=18,
        name="SUGARFISH by sushi nozawa",
        address="11640 San Vicente Blvd",
        zipcode="90049",
        city="Los Angeles",
        state="CA",
        phone_number="3108204477",
        website="https://sugarfishsushi.com/",
    )
    business19 = Business(
        user_id=19,
        name="Killer Noodle Tsujita",
        address="2030 Sawtelle Blvd",
        zipcode="90025",
        city="Los Angeles",
        state="CA",
        phone_number="4242930474",
        website="https://killernoodle.com/",
    )
    business20 = Business(
        user_id=20,
        name="Haidilao Hot Pot",
        address="2710 Alton Pkwy",
        zipcode="92606",
        city="Irvine",
        state="CA",
        phone_number="9495661766",
        website="https://www.haidilao.com/",
    )
    business21 = Business(
        user_id=21,
        name="Baekjeong",
        address="14160 Culver Dr",
        zipcode="92604",
        city="Irvine",
        state="CA",
        phone_number="9499986328",
        website="https://www.baekjeongkbbq.com/",
    )

    db.session.add(business1)
    db.session.add(business2)
    db.session.add(business3)
    db.session.add(business4)
    db.session.add(business5)
    db.session.add(business6)
    db.session.add(business7)
    db.session.add(business8)
    db.session.add(business9)
    db.session.add(business10)
    db.session.add(business11)
    db.session.add(business12)
    db.session.add(business13)
    db.session.add(business14)
    db.session.add(business15)
    db.session.add(business16)
    db.session.add(business17)
    db.session.add(business18)
    db.session.add(business19)
    db.session.add(business20)
    db.session.add(business21)

    db.session.commit()


def undo_businesses():
    db.session.execute("TRUNCATE businesses RESTART IDENTITY CASCADE;")
    db.session.commit()
