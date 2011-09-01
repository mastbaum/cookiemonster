#!/usr/bin/env python

import sys
import couchdb

docs = [
    {'type': 'foo', 'loc': 'penn'},
    {'type': 'foo', 'loc': 'penn'},
    {'type': 'foo', 'loc': 'penn'},
    {'type': 'bar', 'loc': 'penn'},
    {'type': 'bar', 'loc': 'underground'},
    {'type': 'baz', 'loc': 'underground'},
    {'type': 'foo', 'loc': 'underground'}
]

def main(server, dbname):
    couch = couchdb.Server(server)

    try:
        db = couch[dbname]
    except couchdb.ResourceNotFound:
        db = couch.create(dbname)

    for doc in docs:
        db.save(doc)

    print 'OK:', server + '/' + dbname

if __name__ == '__main__':
    if len(sys.argv) == 3:
       print 'Uploading...'
       main(*sys.argv[1:])
    else:
        print 'Usage:', sys.argv[0], ' [couchdb server url] [dbname]'

