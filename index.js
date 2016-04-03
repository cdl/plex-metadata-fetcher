/**
 * plex-metadata-fetcher
 * Fetches metadata for a given filename from The Movie DB/The TV DB, and then returns a proper Plex
 * formatted filename. Intended to be used with something like Hazel.
 *
 * @author Colby Ludwig (@cdl)
 */

// .env setup!
require('dotenv').config();

// package requirements!
var TVDB = require('node-tvdb');
var denodeify = require('denodeify');
var moviedb = require('moviedb')(process.env.MOVIE_DB_API_KEY);
var tvdb = new TVDB(process.env.TV_DB_API_KEY);
