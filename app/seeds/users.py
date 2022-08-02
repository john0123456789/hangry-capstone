from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username='Demo', email='demo@aa.io', password='password')
    user2 = User(
        username='marnie', email='marnie@aa.io', password='password')
    user3 = User(
        username='bobbie', email='bobbie@aa.io', password='password')
    user4 = User(
        username='john', email='john@aa.io', password='password')
    user5 = User(
        username='jack', email='jack@aa.io', password='password')
    user6 = User(
        username='matty', email='matty@aa.io', password='password')
    user7 = User(
        username='christian', email='christian@aa.io', password='password')
    user8 = User(
        username='jiff', email='jiff@aa.io', password='password')
    user9 = User(
        username='naruto', email='naruto@aa.io', password='password')
    user10 = User(
        username='goku', email='goku@aa.io', password='password')
    user11 = User(
        username='luffy', email='luffy@aa.io', password='password')
    user12 = User(
        username='zoro', email='zoro@aa.io', password='password')
    user13 = User(
        username='usopp', email='usopp@aa.io', password='password')
    user14 = User(
        username='nami', email='nami@aa.io', password='password')
    user15 = User(
        username='robin', email='robin@aa.io', password='password')
    user16 = User(
        username='mark', email='mark@aa.io', password='password')
    user17 = User(
        username='kenny', email='kenny@aa.io', password='password')
    user18 = User(
        username='jimmy', email='jimmy@aa.io', password='password')
    user19 = User(
        username='anthony', email='anthony@aa.io', password='password')
    user20 = User(
        username='wham', email='wham@aa.io', password='password')
    user21 = User(
        username='ashley', email='ashley@aa.io', password='password')

    db.session.add(demo)
    db.session.add(user2)
    db.session.add(user3)
    db.session.add(user4)
    db.session.add(user5)
    db.session.add(user6)
    db.session.add(user7)
    db.session.add(user8)
    db.session.add(user9)
    db.session.add(user10)
    db.session.add(user11)
    db.session.add(user12)
    db.session.add(user13)
    db.session.add(user14)
    db.session.add(user15)
    db.session.add(user16)
    db.session.add(user17)
    db.session.add(user18)
    db.session.add(user19)
    db.session.add(user20)
    db.session.add(user21)




    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
