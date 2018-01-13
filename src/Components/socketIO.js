/**
 *
 * Description
 *
 * @package        TLSignal Client
 * @category       Source
 * @author         Michael Akanji <matscode@gmail.com>
 * @date           2017-11-03
 *
 */

import * as io from 'socket.io-client';

// Localhost
const socketIO = io.connect('http://localhost:3000');

// Local Area Network
//const socketIO = io.connect('http://192.168.137.236:3000');

// Remote/Production
//const socketIO = io.connect('https://sleepy-island-63580.herokuapp.com:443');

export default socketIO;
