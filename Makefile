# simple makefile to avoid repeatitive tasks

doc_build:
	docco *.js

doc_monitor: build
	(while inotifywait -r -e modify,attrib,create . ; do make build; done)



