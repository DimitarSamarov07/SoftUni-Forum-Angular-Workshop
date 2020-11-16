import {Injectable, PLATFORM_ID, Provider} from '@angular/core';
import {isPlatformBrowser, isPlatformServer} from "@angular/common";


interface IStorage {
  setItem<T>(key: string, item: T): T;

  getItem<T>(key: string): T;
}

@Injectable()
export class StorageService implements IStorage {
  getItem<T>(key: string): T {
    return null;
  }

  setItem<T>(key: string, item: T): T {
    return item;
  }
}

export function storageFactory(platformId: string) {
  if (isPlatformBrowser(platformId)) {
    return new BrowserStorage();
  } else if (isPlatformServer(platformId)) {
    return new ServerStorage();
  }
}

export const storageServiceProvider: Provider = {
  provide: StorageService,
  useFactory: storageFactory,
  deps: [PLATFORM_ID]
}

@Injectable()
export class BrowserStorage {
  localStorage = localStorage;

  setItem<T>(key, item: T): T {
    const str = typeof item === "string" ? item : JSON.stringify(item)
    this.localStorage.setItem(key, str);
    return item;
  }

  getItem<T>(key: string): T {
    let item;
    const tmp = this.localStorage.getItem(key) as any;
    if (!tmp) {
      return null;
    }
    try {
      item = JSON.parse(tmp);
    } catch {
      item = tmp;
    }
    return item;
  }
}

@Injectable()
export class ServerStorage {
  localStorage = {
    data: {},
    setItem<T>(key, item: T): void {
      this.data[key] = item
    },
    getItem<T>(key: string): T {
      return this.data[key];
    }
  }

  setItem<T>(key, item: T): T {
    this.localStorage.setItem(key, JSON.stringify(item));
    return item;
  }

  getItem<T>(key: string): T {
    let item;
    const tmp = this.localStorage.getItem(key) as any;
    if (!tmp) {
      return null;
    }
    try {
      item = JSON.parse(tmp);
    } catch {
      item = tmp;
    }
    return item;
  }
}
