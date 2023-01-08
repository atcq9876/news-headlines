/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const { isReadable } = require('stream');
const NewsView = require('./newsView');

// create jest automatic mocks of the model and client classes
jest.mock('./newsModel');
jest.mock('./newsClient');

