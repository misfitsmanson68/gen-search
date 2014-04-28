var sites = {
      'ancestry': 'Ancestry.com',
      'archives': 'Archives.com',
      'billiongraves': 'Billion Graves',
      'familysearch': 'FamilySearch',
      'findagrave': 'Find-A-Grave',
      'findmypast': 'Find-My-Past',
      'fold3': 'Fold3',
      'genealogybank': 'GenealogyBank',
      'geni': 'Geni',
      'newspapers': 'Newspapers.com',
      'werelate': 'WeRelate.org',
      'worldvitalrecords': 'WorldVitalRecords'
    },
    props = {
      givenName: 'Given Name',
      familyName: 'Family Name',
      birthPlace: 'Birth Place',
      birthDate: 'Birth Date',
      deathPlace: 'Death Place',
      deathDate: 'Death Date',
      marriagePlace: 'Marriage Place',
      marriageDate: 'Marriage Date',
      fatherGivenName: 'Father\'s Given Name',
      fatherFamilyName: 'Father\'s Family Name',
      motherGivenName: 'Mother\'s Given Name',
      motherFamilyName: 'Mother\'s Family Name',
      spouseGivenName: 'Spouse\'s Given Name',
      spouseFamilyName: 'Spouse\'s Family Name'
    };

$(document).ready(function(){
  
  var formList = $('#schema');

  // Add form elements
  $.each(props, function(key, display){
    formList.append(
      $('<div class="form-group">')
        .append('<label for="'+key+'" class="col-sm-6 control-label">'+display+'</label>')
        .append('<div class="col-sm-6"><input type="text" class="form-control" id="'+key+'" placeholder="'+display+'"></div>')
    );
  });
  
  // Bind enter key
  $('input', formList).keypress(function(e) {
    if(e.which == 13) {
      links();
    }
  });
  
  // Generate Links button
  $('#gen-links').click(links);
  
});

/**
 * Generate Links
 */
function links(){
  
  // Gather data
  var data = {};
  $.each(props, function(key){
    var value = $('#' + key).val().trim();
    if(value){
      data[key] = value;
    }
  });
  
  // Clear any old links
  var linkList = $('#links').html('');
  
  // Generate links
  $.each(sites, function(key, display){
    var url = gensearch(key, data);
    linkList.append('<div class="btn-row"><a class="btn btn-success" target="_blank" href="'+url+'">'+display+'</a></div>');
  });
};