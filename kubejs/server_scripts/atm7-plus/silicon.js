onEvent('recipes', e => {
    // Replaces mod-specific silicon items with the forge:silicon tag.
    e.replaceInput({}, 'refinedstorage:silicon', '#forge:silicon')
    e.replaceInput({}, 'ae2:silicon', '#forge:silicon')
})
