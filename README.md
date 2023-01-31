# :eyes: Secret

Secreto-like anonymous messaging app.<br>
This project was bootstrapped with [Vite (React)](https://vitejs.dev/) and powered by [Supabase](https://supabase.io/).

> **Warning**<br>
> This project is not completely finished, nor is the documentation complete at all.

## Supabase Setup

Query to create table `messages`:

```sql
CREATE TABLE messages (
  id BIGINT GENERATED ALWAYS AS IDENTITY NOT NULL,
  message TEXT DEFAULT '' NOT NULL,
  owner BOOL DEFAULT FALSE NOT NULL,
  active BOOL DEFAULT TRUE NOT NULL,
  parent BIGINT NULL,
  created TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL,
  deleted TIMESTAMP WITH TIME ZONE DEFAULT NULL NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (parent) REFERENCES messages (id)
);
```

## App Development

Environment variable needed:

```
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON=
VITE_APP_NAME=
VITE_APP_TITLE=
VITE_APP_DESCRIPTION=
```

To run local server use:

```bash
yarn dev
```

To build the website:

```bash
yarn build
```

## License

Originally this project belonged to:<br>
[Reynadi531/secret-message](https://github.com/Reynadi531/secret-message)<br>
With an MIT License.

Rebuilt with [MIT License](./LICENSE) anyway by [Suluh S](https://github.com/sooluh).
