(function() {var implementors = {};
implementors["futures_channel"] = [{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"futures_sink/trait.Sink.html\" title=\"trait futures_sink::Sink\">Sink</a>&lt;T&gt; for <a class=\"struct\" href=\"futures_channel/mpsc/struct.Sender.html\" title=\"struct futures_channel::mpsc::Sender\">Sender</a>&lt;T&gt;","synthetic":false,"types":["futures_channel::mpsc::Sender"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"futures_sink/trait.Sink.html\" title=\"trait futures_sink::Sink\">Sink</a>&lt;T&gt; for <a class=\"struct\" href=\"futures_channel/mpsc/struct.UnboundedSender.html\" title=\"struct futures_channel::mpsc::UnboundedSender\">UnboundedSender</a>&lt;T&gt;","synthetic":false,"types":["futures_channel::mpsc::UnboundedSender"]},{"text":"impl&lt;'_, T&gt; <a class=\"trait\" href=\"futures_sink/trait.Sink.html\" title=\"trait futures_sink::Sink\">Sink</a>&lt;T&gt; for &amp;'_ <a class=\"struct\" href=\"futures_channel/mpsc/struct.UnboundedSender.html\" title=\"struct futures_channel::mpsc::UnboundedSender\">UnboundedSender</a>&lt;T&gt;","synthetic":false,"types":["futures_channel::mpsc::UnboundedSender"]}];
implementors["futures_sink"] = [];
implementors["opentelemetry"] = [{"text":"impl&lt;I, T:&nbsp;<a class=\"trait\" href=\"futures_sink/trait.Sink.html\" title=\"trait futures_sink::Sink\">Sink</a>&lt;I&gt;&gt; <a class=\"trait\" href=\"futures_sink/trait.Sink.html\" title=\"trait futures_sink::Sink\">Sink</a>&lt;I&gt; for <a class=\"struct\" href=\"opentelemetry/api/trace/futures/struct.WithContext.html\" title=\"struct opentelemetry::api::trace::futures::WithContext\">WithContext</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"futures_sink/trait.Sink.html\" title=\"trait futures_sink::Sink\">Sink</a>&lt;I&gt;,&nbsp;</span>","synthetic":false,"types":["opentelemetry::api::trace::futures::WithContext"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()