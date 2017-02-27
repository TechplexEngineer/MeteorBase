All collections are created in their own file and stored in /lib/collections

Each collection will attach a schema to be used by the Collection2 package for input validation.

The schema will be made available on the collection object under the schema key. ie: Camp.schema

All client side operations except find will be explicitly denied.