DROP TABLE IF EXISTS notes;
DROP TABLE IF EXISTS folders;

-- added a folders table ****************
CREATE TABLE folders
(
  id serial PRIMARY KEY,
  name text NOT NULL
);

ALTER SEQUENCE folders_id_seq RESTART WITH 100;

INSERT INTO folders
  (name)
VALUES
  ('Archive'),
  ('Drafts'),
  ('Personal'),
  ('Work');
-- ****************************************

CREATE TABLE notes (
  id serial PRIMARY KEY,
  title text not null,
  content text,
  created timestamp DEFAULT current_timestamp,
  folder_id INT REFERENCES folders(id) ON DELETE SET NULL
);
-- ON DELETE SET NULL
-- ON DELETE CASCADE
-- ON DELETE RESTRICT

ALTER SEQUENCE notes_id_seq RESTART WITH 1000;


INSERT INTO notes
(title, content, folder_id) VALUES
  (
   '5 life lessons learned from cats',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    100
 ),
  (
    'What the government doesn''t want you to know about cats',
    'Posuere sollicitudin aliquam ultrices sagittis orci a.',
    101
  ),
  (
    'The most boring article about cats you''ll ever read',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    103
  ),
  (
    '7 things lady gaga has in common with cats',
    'Posuere sollicitudin aliquam ultrices sagittis orci a. Feugiat sed lectus vestibulum mattis ullamcorper velit. Odio pellen',
    102
  ),
  (
    'The most incredible article about cats you''ll ever read',
    'Lorem ipsum dolor sit amet.',
    101
  ),
  (
    '10 ways cats can help you live to 100',
    'Posuere sollicitudin aliquam ultrices sagittis orci a. Feugiat sed lectus vestibulum mattis ullamcorper velit. Odio pell',
    102
  ),
  (
    '9 reasons you can blame the recession on cats',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
    100
  ),
  (
    '10 ways marketers are making you addicted to cats',
    'Posuere sollicitudin aliquam ultrices sagittis orci a. Feugiat sed lectus vestibulum mattis ullamcorper velit. Odio pellentesque diam volutpat commodo sed',
    103
  ),
  (
    '11 ways investing in cats can make you a millionaire',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis',
    101
  ),
  (
    'Why you should forget everything you learned about cats',
    'Posuere sollicitudin aliquam ultrices sagittis orci a. Feugiat sed lectus vestibulum mattis ullamcorper velit. Odio pellentesque diam volutpat commodo ',
    100
  );