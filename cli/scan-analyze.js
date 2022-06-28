/**
 * @param {NS} ns
 **/
export async function main(ns) {
	// Disables the log
	ns.clearLog();
	ns.disableLog('ALL');

    // Get the max-depth argument
	let level = ns.args[0];

    // Initiate the recursive function
	await scanHost(ns, "home", 0, level);
}

/**
 * @param {NS} ns
 * @param {string} host
 * @param {int} level
 * @param {int} maxLevel
 * @param {string[]} oldHost
 **/
async function scanHost(ns, host, level = 0, maxLevel = 1, oldHost = ["home"]) {
    // Scan all hosts available in that server
	let hosts = await ns.scan(host);

    // Exclude the old server
    // If the current server shows  ["home", "n00dles", "foodnstuff"]
    // And the `oldHost` shows      ["home"]
    // The filtered hosts would be  ["n00dles", "foodnstuff"]
	let filteredHosts = hosts.filter(h => !oldHost.includes(h));

    // Adds all the hosts available to the `oldHost` to prevent recursivity
	hosts.forEach(host => oldHost.push(host));

	for (const host of filteredHosts) {
        // Add sleep to prevent the Bitburner to freeze
		await ns.sleep(100)

        // Checks if the server has Root Access, along with the minimum level to use `hack()`.
		let hRA = await ns.hasRootAccess(host);
		let rHS = await ns.getServerRequiredHackingLevel(host);
		let firstLine = `--Root Access: ${hRA ? 'YES' : 'NO'}, Required hacking skill: ${rHS}`

        // Get the minimum ports that should be bypassed in order to use `hack()`
		let sNPR = await ns.getServerNumPortsRequired(host);
		let secondLine = `--Number of open ports required to NUKE: ${sNPR}`;

        // Get the server's maximum RAM
		let sMR = await ns.getServerMaxRam(host);
		let thirdLine = `--RAM ${sMR}`;

        // Print the data
		ns.print("----".repeat(level) + `> ${host}`)
		ns.print("----".repeat(level) + firstLine)
		ns.print("----".repeat(level) + secondLine)
		ns.print("----".repeat(level) + thirdLine)
		ns.print("")

        // Recursive
		if (level < maxLevel - 1) {
			await scanHost(ns, host, level + 1, maxLevel, oldHost);
		}
	}
}