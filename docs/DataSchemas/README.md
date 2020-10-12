# Database Schemas
On this page:
[[toc]]

## User

- A user can be part of one or more groups

```mermaid
classDiagram
    UserGroups <|-- User
    Group <|-- UserGroups
    class User {
        +Uuid id
        +String type
        +string FirstName
        +string LastName
        +string Address
        +string Phone
        +string Email
        +char Password
        +char Salt
        +string Validated        
        +Datetime Created
        +Datetime Updated
        +json Flags
        +json Attributes
        +new(data) bool
        +set(id, key, value) bool
        +del(id) bool
        +addGroup(id, groupId) bool
        +remGroup(id, groupId) bool
        +isValid(id) bool
        +groups(id) grouplist
    }
    class UserGroups {
        +uuid UserId
        +uuid GroupId
        +string Role
    }
    class Group {
        +uuid Id
        +string Name
        +Datetime Created
        +Datetime Updated
        +json Flags
        +new(data) bool
        +addUser(id, userId) bool
        +remUser(id, userId) bool
        +users(id) userlist
    }
```

## Full Text Index

- Search platform contains all information necessary to search and navigation
- Other data and content are stored in a relational database

```mermaid
classDiagram
    UserGroups <|-- User
    Group <|-- UserGroups
    Journal <-- User
    Journal <-- Group
    class User {
        +Uuid id
        +String type
        +string FirstName
        +string LastName
        +string Address
        +string Phone
        +string Email
        +char Password
        +char Salt
        +string Validated        
        +Datetime Created
        +Datetime Updated
        +json Flags
        +json Attributes
        +new(data) bool
        +set(id, key, value) bool
        +del(id) bool
        +addGroup(id, groupId) bool
        +remGroup(id, groupId) bool
        +isValid(id) bool
        +groups(id) grouplist
    }
    class UserGroups {
        +uuid UserId
        +uuid GroupId
        +string Role
    }
    class Group {
        +uuid Id
        +string Name
        +Datetime Created
        +Datetime Updated
        +json Flags
        +new(data) bool
        +addUser(id, userId) bool
        +remUser(id, userId) bool
        +users(id) userlist
    }
    class Journal {
        +uuid Id
        +string Source
        +string Operation
        +json Metadata
        +Datetime Created
        +Datetime Updated
        +log(source, operation, metadata)
    }
```

## Event log
- The event log (or journal) logs activity wherever necessary
- Internal and external dashboards allow for transparent tracking of activity 
- Fully anonymised

```mermaid
classDiagram
    class Journal {
        +uuid Id
        +string Source
        +string Operation
        +json Metadata
        +Datetime Created
        +Datetime Updated
        +log(source, operation, metadata)
    }
```
