import CreateDataContext from './createDataContext';

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'add_blogpost':
            return [...state,
                     { id: Math.floor(Math.random() * 99999), 
                       title: action.payload.title,
                       content: action.payload.content
                     }
                    ];
        case 'delete_blogpost': {
                console.log('Inside blogReducer delete_blogpost for: ');
                return state.filter(blogPost => blogPost.id !== action.payload);
            }
        default:
            return state;
            
    }
};

const addBlogPost = dispatch => {
    return (title, content, callback) => {
        dispatch({ type: 'add_blogpost', payload: { title: title, content: content} });
        callback();
    };
};

const deleteBlogPost = dispatch => {
    return (id) => {
        dispatch({ type: 'delete_blogpost', payload: id })
    };
};

const editBlogPost = dispatch => {
    return (id, title, content) => {
        dispatch({ 
            type: 'edit_blogpost', 
            payload: { id: id, title: title, content: content} 
        })
    };
}

export const { Context, Provider } = CreateDataContext(
    blogReducer,
    { addBlogPost, deleteBlogPost, editBlogPost },
    [{ title: 'TEST POST', content: 'TEST CONTENT', id: 1 }]
);