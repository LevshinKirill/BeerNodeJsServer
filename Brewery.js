module.exports = class Brewary {

    constructor(id, name, brewery_type, street, city, state, postal_code, country, longitude, latitude, phone, website_url, updated_at, tag_list) {
        this.id = id;
        this.name = name;
        this.brewery_type = brewery_type;
        this.street = street;
        this.city = city;
        this.state = state;
        this.postal_code = postal_code;
        this.country = country;
        this.longitude = longitude;
        this.latitude = latitude;
        this.phone = phone;
        this.website_url = website_url;
        this.updated_at = updated_at;
        this.tag_list = tag_list;
    }

    getFullAddress() {
        return [this.postal_code, this.country, this.state, this.city, this.street].join(" ");
    }

};