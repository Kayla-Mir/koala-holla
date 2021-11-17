CREATE TABLE koalas (
    "id" serial PRIMARY KEY,
    "name" varchar(250) not null,
    "gender" varchar not null,
    "age" 	integer not null,
    "ready_to_transfer" varchar not null,
    "notes" varchar
);  

INSERT INTO koalas ("name", "gender", "age", "ready_to_transfer", "notes")
VALUES ('Scotty', 'M', '4',	'Y', 'Born in Guatemala'),
('Jean', 'F', '5', 'Y', 'Allergic to lots of lava'),
('Ororo', 'F', '7',	'N', 'Loves listening to Paula (Abdul)'),
('Logan', 'M', '15', 'N', 'Loves the sauna' ),
('Charlie',	'M', '9', 'Y', 'Favorite band is Nirvana' ),
( 'Betsy', 'F', '4', 'Y', 'Has a pet iguana' );