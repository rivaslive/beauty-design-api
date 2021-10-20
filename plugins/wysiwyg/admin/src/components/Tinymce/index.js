import React from "react";
import PropTypes from "prop-types";
import {Editor} from "@tinymce/tinymce-react";

const TinyEditor = ({onChange, name, value}) => {
  return (
    <Editor
      apiKey="191jv7604bmkhm5mcdfsfjezqtvysdnv8lbb6wh2l07rrooj"
      value={value}
      tagName={name}
      onEditorChange={(editorContent) => {
        onChange({target: {name, value: editorContent}});
      }}
      outputFormat="html"
      init={{
        height: 400,
        default_link_target: '_blank',
        link_assume_external_targets: true,
        link_title: false,
        relative_urls: false,
        remove_script_host: false,
        convert_urls: true,
        plugins: [
          'advlist autolink link image lists charmap print preview hr anchor pagebreak',
          'searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking',
          'table emoticons template paste code help'
        ],
        toolbar: 'undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | ' +
          'bullist numlist outdent indent | link image | print preview media fullpage | ' +
          'forecolor backcolor emoticons | code | help',
        menu: {
          file: {title: 'File', items: 'newdocument restoredraft | preview | print '},
          edit: {title: 'Edit', items: 'undo redo | cut copy paste | selectall | searchreplace'},
          view: {title: 'View', items: 'code | visualaid visualchars visualblocks | spellchecker | preview fullscreen'},
          insert: {
            title: 'Insert',
            items: 'image link media template codesample inserttable | charmap emoticons hr | pagebreak nonbreaking anchor toc | insertdatetime'
          },
          format: {
            title: 'Format',
            items: 'bold italic underline strikethrough superscript subscript codeformat | formats blockformats fontformats fontsizes align | forecolor backcolor | removeformat'
          },
          tools: {title: 'Tools', items: 'spellchecker spellcheckerlanguage | code wordcount'},
          table: {title: 'Table', items: 'inserttable | cell row column | tableprops deletetable'},
          code: {title: 'Code', items: 'code'},
          help: {title: 'Help', items: 'help'}
        }
      }}
    />
  );
};
TinyEditor.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
};
export default TinyEditor;