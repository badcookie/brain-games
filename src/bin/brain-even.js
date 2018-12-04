#!/usr/bin/env node
import greetings from '..';
import game from '../evenGame';

const user = greetings();
game(user);
