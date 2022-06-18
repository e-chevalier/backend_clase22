class Product{

    constructor(id, {title, price, description, thumbnail, timestamp, code, stock, qty}) {
        this.id = id
        this.title = title
        this.price = price
        this.description = description
        this.thumbnail = thumbnail
        this.timestamp =  timestamp
        this.code = code
        this.stock = stock
        this.qty = qty
    }
}

const productsMap = {}