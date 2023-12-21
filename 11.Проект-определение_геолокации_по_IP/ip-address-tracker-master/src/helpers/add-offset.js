export function addOffset(map) {
    // console.log('offset was added');
    const offsetY = map.getSize().y * 0.17;

    map.panBy([0, -offsetY], {animate: false});
    // console.log(offsetY);
}