db.getCollection("massive-data").createIndex({email:1})
db.getCollection("massive-data").dropIndex({email:1})