from tools import execute_tool, route_tool, should_refuse


def match_faq(question: str, locale: str) -> str | None:
    if should_refuse(question):
        return execute_tool("refuse_off_topic", locale)
    name = route_tool(question)
    if name:
        return execute_tool(name, locale)
    return execute_tool("refuse_off_topic", locale)
