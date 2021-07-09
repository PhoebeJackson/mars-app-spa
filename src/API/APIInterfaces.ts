export interface Rover {
    id: number
    name: string
    landing_date: string
    launch_date: string
    status: string
    max_sol: number
    max_date: string
    total_photos: number
    cameras: Camera[]
}

export interface Camera {
    id: number
    name: string
    rover_id: number
    full_name: string
}

export interface Photo {
    id: number
    sol: number
    camera: Camera
    img_src: string
    earth_date: string
    rover: Rover
}

export interface Asteroid {
    "links": {
        "self": string
    },
    "id": string,
    "neo_reference_id": string,
    "name": string,
    "nasa_jpl_url": string,
    "absolute_magnitude_h": number,
    "estimated_diameter": {
        "kilometers": {
            "estimated_diameter_min": number,
            "estimated_diameter_max": number
        },
        "meters": {
            "estimated_diameter_min": number,
            "estimated_diameter_max": number
        },
        "miles": {
            "estimated_diameter_min": number,
            "estimated_diameter_max": number
        },
        "feet": {
            "estimated_diameter_min": number,
            "estimated_diameter_max": number
        }
    },
    "is_potentially_hazardous_asteroid": boolean,
    "close_approach_data": [
        {
            "close_approach_date": string,
            "close_approach_date_full": string,
            "epoch_date_close_approach": number,
            "relative_velocity": {
                "kilometers_per_second": string,
                "kilometers_per_hour": string,
                "miles_per_hour": string
            },
            "miss_distance": {
                "astronomical": string,
                "lunar": string,
                "kilometers": string,
                "miles": string
            },
            "orbiting_body": string
        }
    ],
    "is_sentry_object": boolean
}