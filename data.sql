--
-- PostgreSQL database dump
--

-- Dumped from database version 14.18 (Homebrew)
-- Dumped by pg_dump version 14.18 (Homebrew)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Data for Name: User; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public."User" (id, email, password, token, "createdAt") VALUES ('8ec874de-303f-4370-b6e9-66b625eae411', 'zidane917@gmail.com', '$2b$10$MRGbxQQiMPWscjTJuZ.axO70rTDWDCqivCDwGFZ2LQF7fmtpdtzl2', NULL, '2025-08-11 06:23:49.972');
INSERT INTO public."User" (id, email, password, token, "createdAt") VALUES ('30242dd4-ace2-4907-8a55-4e7a12448c34', 'rj@jeppi.co', '$2b$10$8B8prBzQHdkB2naqSBeO1Oj2hIasrsjYC.TlS2MrBUv0irXgExQAm', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIzMDI0MmRkNC1hY2UyLTQ5MDctOGE1NS00ZTdhMTI0NDhjMzQiLCJlbWFpbCI6InJqQGplcHBpLmNvIiwiaWF0IjoxNzU0OTg4NDE2LCJleHAiOjE3NTUwNzQ4MTZ9.Pj8IKTbVWGEn8aiLnW3k-DMfPFlPLO_Dgf20jH7U9qM', '2025-08-12 08:08:32.978');


--
-- Data for Name: Conversion; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public."Conversion" (id, text, voice, rate, pitch, volume, "createdAt", "userId", language) VALUES ('2b13ca3c-7fe1-4d38-bbc3-f674adb67e56', 'Hello, this is a sample text to speech conversion.', 'Daniel (English (United Kingdom))', 1, 1, 80, '2025-08-12 04:30:09.781', '8ec874de-303f-4370-b6e9-66b625eae411', 'en-GB');
INSERT INTO public."Conversion" (id, text, voice, rate, pitch, volume, "createdAt", "userId", language) VALUES ('f417260f-cf9b-4081-8950-6956caf37543', 'Hello, this is a second sample text to speech conversion.', 'Samantha', 2, 0.7, 50, '2025-08-12 06:46:46.872', '8ec874de-303f-4370-b6e9-66b625eae411', 'en-US');
INSERT INTO public."Conversion" (id, text, voice, rate, pitch, volume, "createdAt", "userId", language) VALUES ('680ab0cc-eeec-44a5-8681-d6a46a85eadd', 'Hello, this is a third sample text to speech conversion.', 'Boing', 0.5, 1.7, 70, '2025-08-12 06:47:45.555', '8ec874de-303f-4370-b6e9-66b625eae411', 'en-US');
INSERT INTO public."Conversion" (id, text, voice, rate, pitch, volume, "createdAt", "userId", language) VALUES ('d7d634be-6d06-4c4a-bf48-f8059ae07650', 'Sweet, juicy, and vibrant, the mango is a tropical delight loved worldwide. Its golden flesh bursts with flavor, rich in vitamins A and C. Whether eaten fresh, blended into smoothies, or used in savory dishes, mangoes add a touch of sunshine to every bite. A true summer treasure! ', 'Good News', 1.5, 1.9, 10, '2025-08-12 08:17:13.056', '30242dd4-ace2-4907-8a55-4e7a12448c34', 'en-US');


--
-- Data for Name: _prisma_migrations; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) VALUES ('bcf4e89d-87b8-4a71-b0ec-d2560d569735', '34c461fc93596d3c85878a4f4f7b1b99c878833fd67e729e69ea3b2b0a97dc5a', '2025-08-11 13:15:11.459907+07', '20250811061511_init', NULL, NULL, '2025-08-11 13:15:11.452801+07', 1);
INSERT INTO public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) VALUES ('140c7474-1670-4db6-bb4c-8474348974f7', '662e9abbee89bdfe917144bae5195a077abfa7d739bb07c5a751860a00e62327', '2025-08-12 10:47:28.909324+07', '20250812034728_add_language_to_conversion', NULL, NULL, '2025-08-12 10:47:28.906482+07', 1);


--
-- PostgreSQL database dump complete
--

