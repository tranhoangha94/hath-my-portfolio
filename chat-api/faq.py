from tools import _norm, execute_tool, is_off_topic, route_tool


def match_faq(question: str, locale: str) -> str | None:
    if is_off_topic(question):
        return execute_tool("refuse_off_topic", locale)
    name = route_tool(question)
    if name:
        return execute_tool(name, locale)
    return None
