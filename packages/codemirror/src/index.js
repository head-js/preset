import { EditorView, basicSetup } from 'codemirror';
import { keymap } from '@codemirror/view';
import { defaultKeymap, indentWithTab } from '@codemirror/commands';
import { javascript } from '@codemirror/lang-javascript';
import { debounce } from 'lodash-es';


function noop() {}


export function createView(el, doc = '', { onDocChanged = noop }) {
  const onDocChangedDebounced = debounce((view) => {
    const doc = view.state.doc.toString();
    // console.log('onDocChanged', doc);
    onDocChanged(doc);
  }, 1000);

  const view = new EditorView({
    doc,
    extensions: [
      basicSetup,
      keymap.of([ defaultKeymap, indentWithTab ]),
      javascript({ jsx: true }),
      EditorView.updateListener.of((update) => {
        if (update.docChanged) {
          onDocChangedDebounced(update.view);
        }
      }),
    ],
    parent: el,
  });
  return view;
}


export function createState() {}
