Cookie Monster
==============
This is a simplified demo of issues with browser cookies and client-side rendering in kanso.

To install:

    $ kanso push cookiemonster
    $ python push_test_docs.py

To replicate issue:

1. Toggle some checkboxes and click the link. This wll probably work right.
2. Change checkboxes. Things go away.
3. Refresh. See old data, briefly.
4. Full-cache refresh. See correct data, briefly.
5. Normal refresh at will to see correct data flash again

