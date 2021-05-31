import { Injectable } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';
import { StorageEntity } from '../models/storage-entity.model'

@Injectable({ providedIn: 'root' })

export class StorageService {

    constructor(
        private localStorageService: LocalStorageService
    ) { }

    set<T>(key: string, value: T, expires: Date) {
        let entity = new StorageEntity<T>();
        entity.entity = value;
        entity.timestamp = expires.getTime();
        let now = new Date();
        if (Date.now() > entity.timestamp) {
            this.localStorageService.remove(key);
        } else {
            this.localStorageService.set(key, entity);
        }
    }

    get<T>(key: string, def?: T): T {
        let entity = this.localStorageService.get<StorageEntity<T>>(key);
        if (entity != null) {
            if (Date.now() > entity.timestamp) {
                this.localStorageService.remove(key);
            } else {
                return <T>entity.entity;
            }
        }
        return def;
    }

    remove(...key: string[]) {
        this.localStorageService.remove(...key);
    }

    clearStorage(key: string) {
        this.remove(key);
    }

}
