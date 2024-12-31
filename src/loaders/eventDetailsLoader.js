export async function eventDetailsLoader(obj) {
    let id = obj.params.id * 1;

    return id ? { id: id } : { message: "No such event exists" };
}
