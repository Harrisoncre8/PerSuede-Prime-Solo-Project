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
    "low" VARCHAR NOT NULL
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
    "outfits_id" INT REFERENCES "outfits",
    "heart_status" BOOLEAN DEFAULT NULL
);


-- SELECT "outfits"."id", "outfits"."url", "outfits"."age", "outfits"."weather_id" 
-- FROM "outfits"
-- JOIN "weather" ON "outfits"."weather_id" = "weather"."id"
-- WHERE "weather"."weather_type" = 'Fall'
-- ORDER BY RANDOM()
-- LIMIT 5

-- Default Data for weather
-- INSERT INTO "weather" ("id", "weather_type", "high", "low") VALUES ('1', 'Summer', '200', '70');
-- INSERT INTO "weather" ("id", "weather_type", "high", "low") VALUES ('2', 'Fall', '50', '30');
-- INSERT INTO "weather" ("id", "weather_type", "high", "low") VALUES ('3', 'Winter', '30', '-200');
-- INSERT INTO "weather" ("id", "weather_type", "high", "low") VALUES ('4', 'Spring', '70', '50');

-- Data for outfits
-- INSERT INTO "outfits" ("url", "age", "weather_id") VALUES ('https://i.shopstyle-cdn.com/i/9a4cf799-35de-49cc-8fab-5de073aa18d5/358-426/apparis-louise-faux-fur-jacket-HonestlyKate.jpeg', 'adult', 3);
-- INSERT INTO "outfits" ("url", "age", "weather_id") VALUES ('https://i.shopstyle-cdn.com/i/87abaacf-b715-4071-ad25-b88603669edf/2d0-438/zimmermann-amari-multi-print-linen-mini-dress-HilaryRhoda.jpeg', 'adult', 1);
-- INSERT INTO "outfits" ("url", "age", "weather_id") VALUES ('https://n.nordstrommedia.com/id/sr3/a0032f51-5f5a-4ef9-8730-60a9a6a936fa.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2', 'kid', 2);
-- INSERT INTO "outfits" ("url", "age", "weather_id") VALUES ('https://crossroadstrading.com/wp-content/uploads/2019/03/Luka-Sabbat.png', 'adult', 2);
-- INSERT INTO "outfits" ("url", "age", "weather_id") VALUES ('https://crossroadstrading.com/wp-content/uploads/2019/03/Will-Taylor.png', 'adult', 1);
-- INSERT INTO "outfits" ("url", "age", "weather_id") VALUES ('https://miro.medium.com/max/1792/1*6BbmDn5qhcYQ2mwfKBno1A.png', 'kid', 1);
-- INSERT INTO "outfits" ("url", "age", "weather_id") VALUES ('https://fashionista.com/.image/c_limit%2Ccs_srgb%2Cfl_progressive%2Ch_2000%2Cq_auto:good%2Cw_2000/MTQ1MzcxNDA2MTQ4OTA0NzIx/crazy-with-kaan.jpg', 'kid', 2);
-- INSERT INTO "outfits" ("url", "age", "weather_id") VALUES ('https://i.shopstyle-cdn.com/i/b9b6195d-e1e2-49b5-9da1-30fa060ba507/1a9-280/chunky-knit-sweater-obsessionsnow.jpeg', 'adult', 2);
-- INSERT INTO "outfits" ("url", "age", "weather_id") VALUES ('https://i.shopstyle-cdn.com/i/6d906d04-8999-4970-8ba9-215c7b12b891/200-280/j-brand-natasha-sky-high-skinny-jeans-in-seriously-black-obsessionsnow.jpeg', 'adult', 2);
-- INSERT INTO "outfits" ("url", "age", "weather_id") VALUES ('https://i.shopstyle-cdn.com/i/d33911ef-2f35-4291-9197-5f2a63fa1284/200-280/allsaints-conroy-leather-biker-jacket-obsessionsnow.jpeg', 'adult', 2);
-- INSERT INTO "outfits" ("url", "age", "weather_id") VALUES ('https://i.shopstyle-cdn.com/i/005627c7-84e9-4e9a-ba9b-8a888d52191a/200-280/majorelle-clive-pant-obsessionsnow.jpeg', 'adult', 2);
-- INSERT INTO "outfits" ("url", "age", "weather_id") VALUES ('https://i.shopstyle-cdn.com/i/984db3c1-8184-4b3f-9ed2-098d62deb31e/201-280/and-other-stories-thick-ribbed-beanie-hat-in-white-allegrashaw.jpeg', 'adult', 3);
-- INSERT INTO "outfits" ("url", "age", "weather_id") VALUES ('https://i.shopstyle-cdn.com/i/9563db35-8bde-418c-be86-81c130b10be8/18c-280/apparis-sophie-faux-fur-coat-obsessionsnow.jpeg', 'adult', 3);
-- INSERT INTO "outfits" ("url", "age", "weather_id") VALUES ('https://i.shopstyle-cdn.com/i/278b3cbc-5956-42b9-8f82-07a523ccacc2/200-280/plush-fleece-lined-high-waisted-liquid-legging-obsessionsnow.jpeg', 'adult', 3);
-- INSERT INTO "outfits" ("url", "age", "weather_id") VALUES ('https://i.shopstyle-cdn.com/i/f30a9cc4-efc1-485e-bf28-02e37d989d88/38d-438/thierry-lasry-boundary-v634-plastic-metal-round-sunglasses-allegrashaw.jpeg', 'adult', 3);
-- INSERT INTO "outfits" ("url", "age", "weather_id") VALUES ('https://i.pinimg.com/474x/d4/8a/d8/d48ad851dc1893ecd20b9e8e69d73495--winter-child-boys-accessories.jpg', 'kid', 3);
-- INSERT INTO "outfits" ("url", "age", "weather_id") VALUES ('https://i.pinimg.com/474x/27/a7/8e/27a78ea39c2651bd51adbb7d77a644a9--uk-online-fashion-kids.jpg', 'kid', 3);

-- Admin data
-- INSERT INTO "account" ("username", "password", "zip_code", "name", "clearance_level",) VALUES ('admin', '12345678', 'password1234', 'admin', '1')

-- Query for favorited images
-- SELECT "outfits"."id", "outfits"."url", "outfits"."age", "outfits"."weather_id", "outfits"."user_id", "outfits"."heart_status"
-- FROM "outfits"
-- JOIN "weather" ON "outfits"."weather_id" = "weather"."id"
-- WHERE "heart_status" = true;

-- Dropping all tables
-- DROP TABLE account CASCADE;
-- DROP TABLE favorite CASCADE;
-- DROP TABLE outfits CASCADE;
-- DROP TABLE weather CASCADE;
