export class CodeEditor {
	constructor(editor, opts) {
		this.editor = editor;
		this.$ = editor.$;
		this.pfx = editor.getConfig('stylePrefix');
		this.opts = opts;
		this.canvas = this.findWithinEditor(`.${this.pfx}cv-canvas`);
		this.panelViews = opts.appendTo ? this.$(opts.appendTo) :
			this.findWithinEditor(`.${this.pfx}pn-${opts.panelId}`);
		this.isShowing = true;
	}

	findPanel() {
		const pn = this.editor.Panels;
		const id = this.opts.panelId;
		return pn.getPanel(id) || pn.addPanel({id});
	}

	findWithinEditor(selector) {
		return this.$(selector, this.editor.getEl());
	}

	buildCodeEditor(type) {
		const {editor, opts} = this;

		return editor.CodeManager.createViewer({
			codeName: type === 'html' ? 'htmlmixed' : 'css',
			theme: 'hopscotch',
			readOnly: 0,
			autoBeautify: 1,
			autoCloseTags: 1,
			autoCloseBrackets: 1,
			styleActiveLine: 1,
			smartIndent: 1,
			...opts.codeViewOptions
		});
	}

	buildSection(type, codeViewer) {
		const {$, pfx, opts} = this;
		const section = $('<section></section>');
		section.append($(`
			<div class="codepanel-separator">
					<div class="codepanel-label">${type}</div>
					<div class="cp-btn-container">
							<button class="cp-apply-${type} ${pfx}btn-prim">${opts.cssBtnText}</button>
					</div>
			</div>`));
		const codeViewerEl = codeViewer.getElement();
		codeViewerEl.style.height = 'calc(100% - 30px)';
		section.append(codeViewerEl);
		this.codePanel.append(section);
		return section.get(0);
	}

	buildCodePanel() {
		const {$, editor} = this;
		const panel = this.opts.panelId ? this.findPanel() : 0;
		this.codePanel = $('<div></div>');
		this.codePanel.addClass('code-panel');

		this.cssCodeEditor = this.buildCodeEditor('css');

		this.buildSection('css', this.cssCodeEditor)

		panel && !this.opts.appendTo &&
			panel.set('appendContent', this.codePanel).trigger('change:appendContent');
		this.opts.appendTo && $(this.opts.appendTo).append(this.codePanel);
		this.updateEditorContents();

		this.codePanel.find('.cp-apply-css')
			.on('click', this.updateCss.bind(this));

		editor.on('component:update', model => this.updateEditorContents());
		editor.on('stop:preview', () => {
			if (this.isShowing && !this.opts.preserveWidth) {
				this.canvas.css('width', this.opts.openState.cv);
			}
		});
	}

	showCodePanel() {
		this.isShowing = true;
		this.updateEditorContents();
		this.codePanel.css('display', 'block');
		// make sure editor is aware of width change after the 300ms effect ends
		setTimeout(this.refreshEditors.bind(this), 320);

		if (this.opts.preserveWidth) return;

		this.panelViews.css('width', this.opts.openState.pn);
		this.canvas.css('width', this.opts.openState.cv);
	}

	hideCodePanel() {
		if (this.codePanel) this.codePanel.css('display', 'none');
		this.isShowing = false;

		if (this.opts.preserveWidth) return;

		this.panelViews.css('width', this.opts.closedState.pn);
		this.canvas.css('width', this.opts.closedState.cv);
	}

	refreshEditors() {
		this.cssCodeEditor.refresh();
	}

	updateCss(e) {
		e?.preventDefault();
		const cssCode = this.cssCodeEditor.getContent().trim();
		if (!cssCode || cssCode === this.previousCssCode) return;
		this.previousCssCode = cssCode;
		this.editor.Css.addRules(cssCode);
		return cssCode;
	}

	getRules(rules, opts = {}) {
		const {editor} = this;
		const sm = editor.Selectors;
		return rules.map((rule) => {
			const selector = sm.get(rule.selectors);
			const {state, selectorsAdd} = rule;
			const {atRuleType, atRuleParams} = opts;
			return (
				selector &&
				editor.Css.get(selector, state, atRuleParams, {
					selectorsAdd,
					atRule: atRuleType,
				})
			);
		});
	}

	updateEditorContents() {
		if (!this.isShowing) return;

		this.component = this.editor.getSelected();
		if (this.component) {
			this.cssCodeEditor.setContent(this.editor.CodeManager.getCode(this.component, 'css', {
				cssc: this.editor.Css
			}));
		}
	}
}