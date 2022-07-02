#!/bin/bash
wait-for-it -s db:3306 -- node index.js