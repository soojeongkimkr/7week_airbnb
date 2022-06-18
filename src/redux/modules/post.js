// Actions

// 초기값
const initialState = {
    list: [
        { title: "MV, 몰디브1", mainImage: "https://a0.muscache.com/im/pictures/373443ec-b377-4181-b753-3a2f3508c2b3.jpg?im_w=720", defaultPrice: "884,276"},
        { title: "MV, 몰디브2", mainImage: "https://a0.muscache.com/im/pictures/fa2ed873-e726-4e6d-ab1a-28bc7c69d805.jpg?im_w=720", defaultPrice: "184,276"},
        { title: "MV, 몰디브3", mainImage: "https://a0.muscache.com/im/pictures/2f15fd34-ad65-4b22-a276-50c298cbae3e.jpg?im_w=720", defaultPrice: "284,276"},
        { title: "MV, 몰디브4", mainImage: "https://a0.muscache.com/im/pictures/miso/Hosting-555632030522710376/original/c8b5a0c1-0468-4402-a772-2b93d75366df.jpeg?im_w=720", defaultPrice: "384,276"},
    ]
}

// Action Creators

// middlewares

// Reducer
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        default:
            return state;
    }
}