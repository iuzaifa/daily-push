## What is a Database?
A **database** is an organized collection of structured (or semi-structured) data stored electronically so it can be easily saved, searched, updated, and deleted.  
**Example**: An online shopping site's product catalog (name, price, stock, photos) is stored in a database.

## Database Management Systems (DBMS)
A **DBMS** is the software that manages the database — it handles reading, writing, security, backups, and multiple users at once.  
**Examples**:  
- PostgreSQL  
- MySQL  
- MongoDB  
- Oracle Database  
- SQLite

## Types of Databases
- **Relational Databases** (RDBMS / SQL)  
  Data is stored in **tables** with rows and columns, strict structure, relationships between tables.  
  **Examples**:  
  - PostgreSQL (used by Instagram, Apple, Netflix)  
  - MySQL (used by Facebook, WordPress, YouTube)  
  - SQLite (used in Android apps, Firefox, WhatsApp)

- **Non-Relational Databases** (NoSQL)  
  Flexible structure, good for big/unstructured/changing data.  
  **Sub-types & Examples**:  
  - Document → MongoDB (used by eBay, Adobe, Google)  
  - Key-Value → Redis (used by Twitter/X, GitHub, Stack Overflow for caching)  
  - Wide-Column → Cassandra (used by Netflix, Apple, Spotify)  
  - Graph → Neo4j (used for recommendation engines, fraud detection)

Other modern types:  
- Time-Series → InfluxDB (IoT sensors, monitoring)  
- Vector → Pinecone (AI similarity search, embeddings)  
- Columnar → ClickHouse (fast analytics, used by Uber, Cloudflare)

## What is SQL?
**SQL** (Structured Query Language) is the standard language used to work with relational databases — to ask for data, add data, change data, or manage the database structure.

## SQL is a Declarative Language
You tell SQL **what** you want, not **how** to get it. The database engine figures out the best way.  
**Example**: `SELECT name, price FROM products WHERE price < 1000`  
→ You say: "give me names and prices of cheap products" — engine decides how to search.

## SQL is Case-Insensitive
SQL keywords (`SELECT`, `FROM`, `WHERE`) work the same whether uppercase, lowercase, or mixed.  
**Example**:  
`select NAME from users` = `SELECT name FROM Users` = `SeLeCt NaMe FrOm uSeRs`

## Components of SQL
SQL is split into several groups of commands:

- **Data Query Language (DQL)** → Read/retrieve data  
  Main command: `SELECT`  
  **Example**: `SELECT name, email FROM users WHERE age > 18 ORDER BY name;`

- **Data Manipulation Language (DML)** → Change data content  
  Commands: `INSERT`, `UPDATE`, `DELETE`  
  **Examples**:  
  - `INSERT INTO products (name, price) VALUES ('Laptop', 999);`  
  - `UPDATE users SET status = 'active' WHERE id = 5;`  
  - `DELETE FROM orders WHERE status = 'cancelled';`

- **Data Definition Language (DDL)** → Create or change database structure  
  Commands: `CREATE`, `ALTER`, `DROP`, `TRUNCATE`  
  **Examples**:  
  - `CREATE TABLE students (id INT PRIMARY KEY, name VARCHAR(100));`  
  - `ALTER TABLE products ADD COLUMN discount DECIMAL(5,2);`  
  - `DROP TABLE old_logs;`

- **Data Control Language (DCL)** → Manage who can access what  
  Commands: `GRANT`, `REVOKE`  
  **Examples**:  
  - `GRANT SELECT ON products TO 'analyst';`  
  - `REVOKE INSERT ON orders FROM 'guest';`

- **Transaction Control Language (TCL)** → Control changes as a unit (all or nothing)  
  Commands: `COMMIT`, `ROLLBACK`, `SAVEPOINT`  
  **Examples**:  
  - `BEGIN;` → start transaction  
  - `COMMIT;` → save all changes  
  - `ROLLBACK;` → undo everything since BEGIN