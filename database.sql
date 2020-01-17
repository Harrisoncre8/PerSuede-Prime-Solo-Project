
-- Table that handles account data
CREATE TABLE "account" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "zip_code" INT NOT NULL,
    "name" VARCHAR NOT NULL,
    "clearance_level" INT NOT NULL DEFAULT 0
);

-- Table that handles weather data
CREATE TABLE "weather" (
    "id" SERIAL PRIMARY KEY,
    "weather_type" VARCHAR NOT NULL,
    "high" VARCHAR NOT NULL,
    "low" VARCHAR NOT NULL,
    "user_id" INT REFERENCES "account" DEFAULT NULL
);

-- Table that holds all outfit data
CREATE TABLE "outfits" (
    "id" SERIAL PRIMARY KEY,
    "url" VARCHAR NOT NULL,
    "age" VARCHAR,
    "weather_id" INT REFERENCES "weather"
);

-- Table that handles favorited data
CREATE TABLE "favorite" (
    "id" SERIAL PRIMARY KEY,
    "user_id" INT REFERENCES "account",
    "outfits_id" INT REFERENCES "outfits"
);

-- SELECT "favorite"."id", "favorite"."user_id", "favorite"."outfits_id", "outfits"."url" FROM "favorite"
-- JOIN "outfits" ON "outfits"."id" = "favorite"."outfits_id"

-- Dummy Data for weather
-- INSERT INTO "weather" ("id", "weather_type", "high", "low") VALUES ('1', 'Summer', '200', '70');
-- INSERT INTO "weather" ("id", "weather_type", "high", "low") VALUES ('2', 'Fall', '69', '40');
-- INSERT INTO "weather" ("id", "weather_type", "high", "low") VALUES ('3', 'Winter', '39', '-200');

-- Data for outfits
-- INSERT INTO "outfits" ("url", "age", "weather_id") VALUES ('https://i.shopstyle-cdn.com/i/9a4cf799-35de-49cc-8fab-5de073aa18d5/358-426/apparis-louise-faux-fur-jacket-HonestlyKate.jpeg', 'adult', 3);
-- INSERT INTO "outfits" ("url", "age", "weather_id") VALUES ('https://i.shopstyle-cdn.com/i/87abaacf-b715-4071-ad25-b88603669edf/2d0-438/zimmermann-amari-multi-print-linen-mini-dress-HilaryRhoda.jpeg', 'adult', 1);
-- INSERT INTO "outfits" ("url", "age", "weather_id") VALUES ('https://n.nordstrommedia.com/id/sr3/a0032f51-5f5a-4ef9-8730-60a9a6a936fa.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2', 'kid', 2);
-- INSERT INTO "outfits" ("url", "age", "weather_id") VALUES ('https://crossroadstrading.com/wp-content/uploads/2019/03/Luka-Sabbat.png', 'adult', 2);
-- INSERT INTO "outfits" ("url", "age", "weather_id") VALUES ('https://crossroadstrading.com/wp-content/uploads/2019/03/Will-Taylor.png', 'adult', 1);
-- INSERT INTO "outfits" ("url", "age", "weather_id") VALUES ('https://miro.medium.com/max/1792/1*6BbmDn5qhcYQ2mwfKBno1A.png', 'kid', 1);
-- INSERT INTO "outfits" ("url", "age", "weather_id") VALUES ('https://fashionista.com/.image/c_limit%2Ccs_srgb%2Cfl_progressive%2Ch_2000%2Cq_auto:good%2Cw_2000/MTQ1MzcxNDA2MTQ4OTA0NzIx/crazy-with-kaan.jpg', 'kid', 2);

-- Admin data
-- INSERT INTO "account" ("username", "password", "zip_code", "name", "clearance_level",) VALUES ('admin', '12345678', 'password1234', 'admin', '1')

-- Get 5 random outfits 
-- SELECT * FROM "outfits"
-- ORDER BY RANDOM()
-- LIMIT 5

-- SELECT * FROM "outfits"
-- JOIN "weather" ON "outfits"."weather_id" = "weather"."id"