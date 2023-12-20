export async function getAddress(ip = '8.8.8.8') {
    const response = await fetch(`
        https://geo.ipify.org/api/v2/country,city?apiKey=at_6Wxw1bBSgYv8Bw8a0CP1E3cj1oGsh&ipAddress=${ip}`)
    
    return await response.json();
            
}