
-- Table that handles account data
CREATE TABLE "account" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "zip-code" INT NOT NULL,
    "name" VARCHAR NOT NULL,
    "clearance_level" INT NOT NULL DEFAULT 0
);

-- Table that handles weather data
CREATE TABLE "weather" (
    "id" SERIAL PRIMARY KEY,
    "weather_type" VARCHAR,
    "high" VARCHAR,
    "low" VARCHAR,
    "user_id" INT REFERENCES "account"
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
