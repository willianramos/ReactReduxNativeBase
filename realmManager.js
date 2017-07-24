
'use strict'
import Realm from 'realm'

// schema
const Schema = { 
    name: 'Item', properties:{text: 'string'}
};

export class RealmManager {
    realm = new Realm({schema:[Schema]}); 

    addObject(object, table) {
        this.realm.write(() => {
            this.realm.create(table, object)
        });
    }

    deleteObject(object) {
        this.realm.write(() => {
            this.realm.delete(object);
        });
    }

    fetchObjects(table) {
        return this.realm.objects(table)
    }
}