import * as Models from './models'

async function getComponents(collection, query) {
    let data;
    console.log(Models[collection])
    try {
        data = await Models[collection].find(query).lean().exec()
    } catch (err) {
        return null
    }
    return data
}

function saveComponent(collection, data) {
    const model = Models[collection]
    try {
        model(data).save()
    } catch (err) {
        return null
    }
    return model
}

export { saveComponent, getComponents }