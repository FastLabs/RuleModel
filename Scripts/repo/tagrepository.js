var mongo = require('mongodb');
console.log('trying to connect');
var mongoConfig = {
    "hostname": "localhost",
    "port": 27017,
    "username": "",
    "password": "",
    "name": "",
    "db": "db"
};
var connectionString = 'mongodb://@localhost:27017/db';
mongo.connect(connectionString, function(err, conn) {
    if (err) {
        console.log('error connecting to mongo localhost');
    }
    else {
        console.log('connected');
        conn.collection('local', function(err, collection) {
            console.log('try to collect');
            if (err) {
                console.log('error fetching the collection');
            }
            else {
                console.log('try to find');
                collection.count(function(err, count) {
                    console.log('--->>>' + count);
                });
                collection.find({}, {
                    limit: 10
                }, function(err, cursor) {
                    if (err) {
                        console.log('error');
                        return;
                    }
                    console.log('convert to array ' + cursor.length);
                    cursor.toArray(function(err, items) {
                        if (err) {
                            console.log('error');
                        }
                        console.log(items);
                        for (var i = 0; i < items.length; i++) {
                            console.log(items[i]);
                        }
                        conn.close();
                    });
                });
            }
        });
    }
});
console.log('done');