import { useCallback } from "react"

const CommentForm =()=>{
    const onSubmitComment = useCallback(()=>{},[commentText])
    const [commentText, onChangeCommentText]= useInpute('');

    return(
        <Form onFinich={onSubmitComment}>
<Form.Item style={{position:'relative, margin: 0'}}>
    <Input.TextArea value={commentText} onChange={onChangeCommentText} rows={4} />
</Form.Item>
        </Form>
    )
}

export default CommentForm;