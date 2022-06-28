/**
 * @param {NS} ns
 * */
export async function main(ns) {
    ns.clearLog();
    ns.disableLog('ALL');

    let host = ns.args[0];

    try {
        let server = await ns.getServer(host);
        let serverHackTime = await ns.getHackTime(host);
        let serverGrowTime = await ns.getGrowTime(host);
        let serverWeakenTime = await ns.getWeakenTime(host);

        ns.print(`${server.hostname}:`);
        ns.print(`Server base security level: ${server.baseDifficulty}`);
        ns.print(`Server current security level: ${server.hackDifficulty}`);
        ns.print(`Server growth rate: ${server.serverGrowth}`);
        ns.print(`Netscript hack() execution time: ${formatDuration(serverHackTime)}`);
        ns.print(`Netscript grow() execution time: ${formatDuration(serverGrowTime)}`);
        ns.print(`Netscript weaken() execution time: ${formatDuration(serverWeakenTime)}`);
    } catch (err) {
        ns.print(err.message);
    }
}

/**
 * Convert miliseconds to the human-readable time.
 *
 * @author W3Resource
 * https://www.w3resource.com/javascript-exercises/fundamental/javascript-fundamental-exercise-230.php 
 *
 * @param {int} ms
 * @return {string}
 */
const formatDuration = ms => {
    if (ms < 0) ms = -ms;

    const time = {
        day: Math.floor(ms / 86400000),
        hour: Math.floor(ms / 3600000) % 24,
        minute: Math.floor(ms / 60000) % 60,
        second: ((ms / 1000) % 60).toPrecision(5),
    };

    return Object.entries(time)
        .filter(val => val[1] !== 0)
        .map(val => val[1] + ' ' + (val[1] !== 1 ? val[0] + 's' : val[0]))
        .join(', ');
};