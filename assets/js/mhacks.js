function updateMHacksIs() {
    $("#mhacks-is").html(mHacksIs[mhacksIsIndex]), mhacksIsIndex == mHacksIs.length - 1 ? mhacksIsIndex = 0 : mhacksIsIndex++
}
$(document).ready(function() {
    setInterval(updateMHacksIs, 1e3)
        
});
var mhacksIsIndex = 0;