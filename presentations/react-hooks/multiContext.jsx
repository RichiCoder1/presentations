function Comment ({ text, commentId, commenterId }) {
    const { timeZone } = useContext(GlobalizationContext);
    const { userId } = useContext(UserContext);
    const { submitEdit } = useContext(ArticleContext);
    
    const isMe = useMemo(() => commenterId === userId, [commenterId, userId]);

    const [editing, setEditing] = useState(false);
    const edit = useCallback(() => setEditing(!editing), [editing]);

    return (
        <div className={`comment ${isMe ? 'comment--me' : ''}`} onClick={edit}>
            {editing 
                ? <Markdown text={text} tz={timeZone} /> 
                : <Editor text={text} onSubmit={submitEdit} tz={timeZone} />}
        </div>
    )
}