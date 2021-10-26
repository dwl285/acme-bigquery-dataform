const inputName = "badges";

test("test2")
  .dataset("stg_badges")
  .input(inputName, `
  select
  1234 as id,
  "some_badge_name" as name,
  timestamp("2021-01-01") as date,
  5678 as user_id
  `)
  .expect(`select
  1234 as badge_id,
  "some_badge_name" as badge_name,
  timestamp("2021-01-01") as award_timestamp,
  5678 as user_id`
  );